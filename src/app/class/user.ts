export class User {
  name: string;
  realName: string;
  icon: string;
  back: string;

  constructor(realName: string) {
    this.name = 'ニックネーム(未設定)';
    this.realName = realName;
    this.icon = '/icon.png';
    this.back = '/mainimg.jpg';
  }

  deserialize() {
    return Object.assign({}, this);
  }
}
