import { getCommentFeatureState } from './comment-store';
import { commentAdapter } from './comment-store/comment.state';

export * from './comment-store/comment.store';

export const { selectAll: selectAllComments } = commentAdapter.getSelectors(
  getCommentFeatureState
);
