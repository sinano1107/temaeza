// リザーブクラス
// 日時・強制or自由を保持する
export class Reserve {
  id?: string;
  date: number;
  compulsion: boolean;

  constructor(date: number, compulsion: boolean, id?: string) {
    this.id = (id) ? id : '';
    this.date = date;
    this.compulsion = compulsion;
  }

  deserialize() {
    let obj = Object.freeze({date: this.date, compulsion: this.compulsion});
    return Object.assign({}, obj);
  }
}
