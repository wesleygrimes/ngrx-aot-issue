import { createFeatureSelector } from '@ngrx/store';

import { CommentState } from './comment.state';

export const getCommentFeatureState = createFeatureSelector<CommentState>('comments');
