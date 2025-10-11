// import { Injectable } from '@angular/core';
// import { createEffect, ofType, Actions } from '@ngrx/effects';
// import { map, catchError, exhaustMap, of } from 'rxjs';

// import {
//   loadUsers,
//   loadUsersSuccess,
//   loadUsersFailure,
//   addUser,
//   addUserSuccess,
//   addUserFailure
// } from './user.action';
// import { UserService } from '../services/user.services';

// @Injectable()
// export class UserEffects {
//   constructor(
//     private actions$: Actions,
//     private userService: UserService
//   ) {}

//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadUsers),
//       exhaustMap(() =>
//         this.userService.getUsers().pipe(
//           map(users => loadUsersSuccess({ users })),
//           catchError(error => of(loadUsersFailure({ error })))
//         )
//       )
//     )
//   );

//   addUser$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(addUser),
//       exhaustMap(({ user }) =>
//         this.userService.createUser(user).pipe(
//           map(newUser => addUserSuccess({ user: newUser })),
//           catchError(error => of(addUserFailure({ error })))
//         )
//       )
//     )
//   );
// }
