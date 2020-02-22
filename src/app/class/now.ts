// なうクラス
// 場所とそこにいる人を保持
export class Now {
  id?: string;
  uid: string;
  campusId: number;

  constructor(uid: string, campusId: number, id?: string) {
    this.id = (id) ? id : '';
    this.uid = uid;
    this.campusId = campusId;
  }

  deserialize() {
    let obj = Object.freeze({uid: this.uid, campusId: this.campusId});
    return Object.assign({}, obj);
  }
}
