import { createAction, props } from '@ngrx/store';
import { User } from './user.modal';


export const addUser = createAction(
  '[User] Add User',
  props<{ user: Partial<User> }>() 
);

export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  '[User] Add User Failure',
  props<{ error: any }>()
);
