import { CommentActions } from './comment.actions';
import {
  commentAdapter,
  commentInitialState,
  CommentState
} from './comment.state';

export function commentReducer(
  state = commentInitialState,
  action: CommentActions.Actions
): CommentState {
  switch (action.type) {
    case CommentActions.Types.LOAD_SUCCESS: {
      return commentAdapter.addAll(action.payload.comments, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case CommentActions.Types.CREATED_AT_PARSE:
      return commentAdapter.addOne(action.payload.comment, state);
    case CommentActions.Types.UPDATED_AT_PARSE: {
      return commentAdapter.updateOne(action.payload.comment, state);
    }
    case CommentActions.Types.DELETED_AT_PARSE: {
      return commentAdapter.removeOne(
        action.payload.comment.details.objectId,
        state
      );
    }
    default: {
      return state;
    }
  }
}
