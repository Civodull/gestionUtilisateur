export class Users {
  public Id: number;
  public name: string;
  public pseudo: string;
  public pwd:string;
  public email:string;

  constructor(Id:number,name: string,pwd:string,email:string, pseudo:string) {
  this.Id = Id;
  this.name = name;
  this.pwd = pwd;
  this.email = email;
  this.pseudo = pseudo;

  }
}
