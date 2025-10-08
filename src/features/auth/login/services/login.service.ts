import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { EnvService } from '../../../../app/core/services/env.service';


@Injectable({ providedIn: 'root' })
export class LoginService {
    base_url:string=""
    results=signal([])

    constructor( private http:HttpClient,private env:EnvService){
        this.base_url=env.BASE_URL

    }
    submitInfo(payload: any): Observable<any> {
        return this.http.post("https://dummyjson.com/auth/login", payload,{ observe: 'response' });
      }


      isLoggedIn():boolean{
        if(localStorage.getItem("authToken")!=null){
            return true
        }
        return false

      }

    
}
