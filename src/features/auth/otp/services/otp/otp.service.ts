import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { EnvService } from '../../../../../app/core/services/env.service';



@Injectable({ providedIn: 'root' })
export class LoginService {
    base_url:string=""
    results=signal([])

    constructor( private http:HttpClient,private env:EnvService){
        this.base_url=env.BASE_URL

    }
    otpSubmit(payload: any): Observable<any> {
        return this.http.post(`${this.base_url}`, payload,{ observe: 'response' });
      }
    
}
