import { createReducer, on } from '@ngrx/store';
import { addUserSuccess } from './user.action';
import { User } from './user.modal';


export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  }))
);
