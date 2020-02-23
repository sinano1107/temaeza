import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';

import { Account } from '../../class/account';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {}

  signup(account: Account): void {
    let auth;
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(_auth => {
        auth = _auth;
        return auth.user.sendEmailVerification();
      })
      .then(() => {
        return this.createUser(auth.user.uid, new User(account.realName));
      })
      .then(() => this.afAuth.auth.signOut())
      .then(() => {
        account.reset();
        alert('メールアドレス確認メールを送信しました。');
      })
      .catch(err => {
        console.log(err);
        alert('アカウントの作成に失敗したンゴ。\n' + err);
      })
  }

  createUser(uid: string, user: User): Promise<void> {
    return this.db.collection('users')
      .doc(uid)
      .set(user.deserialize());
  }
}
