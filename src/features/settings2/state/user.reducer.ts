import { createReducer, on } from '@ngrx/store';
import { User } from './user.modal';
import {
  loadUsersSuccess,
  addUserSuccess
} from './user.action';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] }))
);
