import { PostComment, Commenter } from '.';

export interface PostCommentWithCommenter {
  details: PostComment;
  commenter: Commenter;
}
