export class Account {
  realName: string;
  email: string;
  password: string;

  constructor(realName: string, email: string, password: string) {
    this.realName = realName
    this.email = email;
    this.password = password;
  }

  reset(): void {
    this.realName = '';
    this.email = '';
    this.password = '';
  }
}
