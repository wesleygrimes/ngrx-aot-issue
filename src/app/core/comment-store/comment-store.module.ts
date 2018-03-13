import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { commentReducer } from './comment.reducer';
import { commentInitialState } from './comment.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('comments', commentReducer, {
      initialState: commentInitialState
    })
  ],
  providers: []
})
export class CommentStoreModule {}
