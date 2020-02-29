// なうクラス
// 場所とそこにいる人を保持
export class Now {
  id?: string;
  uid: string;
  campusId: number;
  time: number;

  constructor(uid: string, campusId: number, time: number, id?: string) {
    this.id = (id) ? id : '';
    this.uid = uid;
    this.campusId = campusId;
    this.time = time;
  }

  deserialize() {
    let obj = Object.freeze({uid: this.uid, campusId: this.campusId, time: this.time});
    return Object.assign({}, obj);
  }
}
