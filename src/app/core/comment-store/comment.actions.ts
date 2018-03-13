import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';

import { PostComment, PostCommentWithCommenter } from '../models';

export namespace CommentActions {
  export enum Types {
    NO_ACTION = 'app/comment/NO_ACTION',

    LOAD_REQUEST = 'app/comment/LOAD_REQUEST',
    LOAD_SUCCESS = 'app/comment/LOAD_SUCCESS',

    CREATE = 'app/comment/CREATE',
    UPDATE = 'app/comment/UPDATE',
    DELETE = 'app/comment/DELETE',

    SUBSCRIBE_TO_CREATED = 'app/comment/SUBSCRIBE_TO_CREATED',
    SUBSCRIBE_TO_UPDATED = 'app/comment/SUBSCRIBE_TO_UPDATED',
    SUBSCRIBE_TO_DELETED = 'app/comment/SUBSCRIBE_TO_DELETED',

    CREATED_AT_PARSE = 'app/comment/CREATED_AT_PARSE',
    UPDATED_AT_PARSE = 'app/comment/UPDATED_AT_PARSE',
    DELETED_AT_PARSE = 'app/comment/DELETED_AT_PARSE',

    CREATED_AT_PARSE_ERROR = 'app/comment/CREATED_AT_PARSE_ERROR',
    UPDATED_AT_PARSE_ERROR = 'app/comment/UPDATED_AT_PARSE_ERROR',
    DELETED_AT_PARSE_ERROR = 'app/comment/DELETED_AT_PARSE_ERROR'
  }

  export class CommentNoAction implements Action {
    readonly type = CommentActions.Types.NO_ACTION;
    constructor() {}
  }

  export class LoadCommentsRequestAction implements Action {
    readonly type = CommentActions.Types.LOAD_REQUEST;
    constructor() {}
  }

  export class LoadCommentsSuccessAction implements Action {
    readonly type = CommentActions.Types.LOAD_SUCCESS;
    constructor(public payload: { comments: PostCommentWithCommenter[] }) {}
  }

  export class CreateCommentAction implements Action {
    readonly type = CommentActions.Types.CREATE;
    constructor(public payload: { comment: PostComment }) {}
  }

  export class DeleteCommentAction implements Action {
    readonly type = CommentActions.Types.DELETE;
    constructor(public payload: { commentId: string }) {}
  }

  export class SubscribeToCreatedCommentsAction implements Action {
    readonly type = CommentActions.Types.SUBSCRIBE_TO_CREATED;
    constructor() {}
  }

  export class SubscribeToUpdatedCommentsAction implements Action {
    readonly type = CommentActions.Types.SUBSCRIBE_TO_UPDATED;
    constructor() {}
  }

  export class SubscribeToDeletedCommentsAction implements Action {
    readonly type = CommentActions.Types.SUBSCRIBE_TO_DELETED;
    constructor() {}
  }

  export class CreatedCommentAtParseAction implements Action {
    readonly type = CommentActions.Types.CREATED_AT_PARSE;
    constructor(public payload: { comment: PostCommentWithCommenter }) {}
  }

  export class CreatedComentAtParseErrorAction implements Action {
    readonly type = CommentActions.Types.CREATED_AT_PARSE_ERROR;
    constructor(public payload: { error: any }) {}
  }

  export class UpdatedCommentAtParseAction implements Action {
    readonly type = CommentActions.Types.UPDATED_AT_PARSE;
    constructor(public payload: { comment: Update<PostCommentWithCommenter> }) {}
  }

  export class UpdatedCommentAtParseErrorAction implements Action {
    readonly type = CommentActions.Types.UPDATED_AT_PARSE_ERROR;
    constructor(public payload: { error: any }) {}
  }

  export class DeletedCommentAtParseAction implements Action {
    readonly type = CommentActions.Types.DELETED_AT_PARSE;
    constructor(public payload: { comment: PostCommentWithCommenter }) {}
  }

  export class DeletedCommentAtParseErrorAction implements Action {
    readonly type = CommentActions.Types.DELETED_AT_PARSE_ERROR;
    constructor(public payload: { error: any }) {}
  }

  export type Actions =
    | CommentNoAction
    | LoadCommentsRequestAction
    | LoadCommentsSuccessAction
    | CreateCommentAction
    | DeleteCommentAction
    | SubscribeToCreatedCommentsAction
    | SubscribeToUpdatedCommentsAction
    | SubscribeToDeletedCommentsAction
    | CreatedCommentAtParseAction
    | CreatedComentAtParseErrorAction
    | UpdatedCommentAtParseAction
    | UpdatedCommentAtParseErrorAction
    | DeletedCommentAtParseAction
    | DeletedCommentAtParseErrorAction;
}
