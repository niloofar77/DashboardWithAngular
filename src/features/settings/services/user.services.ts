import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { EnvService } from '../../../app/core/services/env.service';


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
    createUser(payload:any){
      return this.http.post(`https://dummyjson.com/users/add`,payload, { observe: 'response' });

      
    }
      deleteUser(id:number){
        return this.http.delete(`https://dummyjson.com/users/${id}`, { observe: 'response' });
      }

      updateUser(id:number,payload:any){
        return this.http.put(`https://dummyjson.com/users/${id}`,payload, { observe: 'response' })
      }
    
}
