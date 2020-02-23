import { Component, OnInit } from '@angular/core';

import { Account } from '../../class/account';
import { ManageUserService } from '../service/manage-user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  input_realName = '';
  input_email = '';
  input_password = '';

  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
  }

  add() {
    if (this.input_realName!='' && this.input_email!='' && this.input_password!='') {
      this.manageUserService.signup(
        new Account(this.input_realName, this.input_email, this.input_password)
      )
    }
  }

  slicePassword(): void {
    const end = this.input_email.indexOf('@');
    this.input_password = this.input_email.slice(0,end);
  }

}
