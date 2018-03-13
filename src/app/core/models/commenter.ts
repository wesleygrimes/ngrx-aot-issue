export class Commenter {
  constructor(
    public userId: string = null,
    public name: string = null,
    public avatarUrl: string = null,
    public firstName: string = null,
    public lastName: string = null
  ) {}
  static fromEvent(obj): Commenter {
    return Object.assign(new Commenter(), JSON.parse(JSON.stringify(obj)));
  }
}
