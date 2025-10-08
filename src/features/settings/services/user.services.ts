import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { EnvService } from '../../../app/core/services/env.service';
import { User } from '../state/user.modal';


@Injectable({ providedIn: 'root' })
export class UserService {
    base_url:string=""
    results=signal([])

    constructor( private http:HttpClient,private env:EnvService){
        this.base_url=env.BASE_URL

    }
    getAllUsers(page: number, itemsPerPage: number): Observable<any> {
      const skip = (page - 1) * itemsPerPage; 
      return this.http.get(`https://dummyjson.com/users?skip=${skip}&limit=${itemsPerPage}`, { observe: 'response' });
    }
    createUser(user:User):Observable<User>{
      return this.http.post<User>(`'https://dummyjson.com/users/add`,user );

      
    }
      deleteUser(id:number){
        return this.http.delete(`https://dummyjson.com/users/${id}`, { observe: 'response' });
      }
    
}
//tamrin
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from '../state/user.modal';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private baseUrl = 'https://dummyjson.com/users';

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(`${this.baseUrl}`);
//   }

//   createUser(user:User): Observable<User> {
//     return this.http.post<User>(`${this.baseUrl}/add`, user);
//   }
// }
