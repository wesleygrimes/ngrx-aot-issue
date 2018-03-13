export class PostComment {
  constructor(
    public objectId: string = null,
    public createdAt: Date = null,
    public updatedAt: Date = null,
    public postId: string = null,
    public comment: string = null,
    public userId: string = null,
    public status: string = null
  ) {}
  static fromEvent(obj): PostComment {
    return Object.assign(new PostComment(), JSON.parse(JSON.stringify(obj)));
  }
}
