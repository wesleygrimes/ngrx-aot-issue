import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { PostCommentWithCommenter } from '../models';

export const commentAdapter: EntityAdapter<
  PostCommentWithCommenter
> = createEntityAdapter<PostCommentWithCommenter>({
  selectId: model => model.details.objectId,
  sortComparer: (
    a: PostCommentWithCommenter,
    b: PostCommentWithCommenter
  ): number =>
    b.details.createdAt.toString().localeCompare(a.details.createdAt.toString())
});

export interface CommentState extends EntityState<PostCommentWithCommenter> {
  isLoading?: boolean;
  error?: any;
}

export const commentInitialState: CommentState = commentAdapter.getInitialState();
