// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserService } from '../../../features/settings/services/user.services';
// ;

// @Injectable({
//   providedIn: 'root'
// })
// export class UserResolver implements Resolve<any> {
//   constructor(private userService: UserService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//     const page = Number(route.queryParamMap.get('page')) || 1;
//     const itemsPerPage = Number(route.queryParamMap.get('itemsPerPage')) || 10;
//     return this.userService.getAllUsers(page, itemsPerPage);
//   }
// }
