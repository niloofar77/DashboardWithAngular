// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private userRole = new BehaviorSubject<string | null>(null);
//   private accessToken=new BehaviorSubject<string|null>(null)

//   constructor(private router:Router,private http:HttpClient) {}

//   setRole(role: string): void {
//     this.userRole.next(role);
//     localStorage.setItem('userRole', role); 
//   }


//   getRole(): string | null {
//     return localStorage.getItem('userRole');
//   }


//   getRoleObservable() {
//     return this.userRole.asObservable();
//   }
//   isLoggedIn():boolean{
//     const token = localStorage.getItem('authToken'); 
//     return !!token; 
//   }
//   setToken(username:string,password:string){
//     if(username==="admin" &&password==="admin"){
//         localStorage.setItem("authToken","sssssssssssssss")
//         this.router.navigate(["/"])


//     }

   
// }

// logOut(){
//   this.router.navigate(["/"])

//       localStorage.removeItem("authToken")
//       console.log("log out")
   
// }
// login(payload: any) : Observable<any> {

//     return this.http.post("https://dummyjson.com/auth/login", payload,{ observe: 'response' });
  

// }


// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole = new BehaviorSubject<string | null>(null);
  private accessToken = new BehaviorSubject<string | null>(null);

  constructor(private router: Router, private http: HttpClient) {
    const token = sessionStorage.getItem('accessToken');
    if (token) this.accessToken.next(token);

    const role = localStorage.getItem('userRole');
    if (role) this.userRole.next(role);
  }

  // ================= Tokens =================
  setTokens(accessToken: string, refreshToken?: string) {
    this.accessToken.next(accessToken);
    sessionStorage.setItem('accessToken', accessToken);
  
  }

  getAccessToken(): string | null {
    return this.accessToken.value;
  }

  clearTokens() {
    this.accessToken.next(null);
    sessionStorage.removeItem('accessToken');
  }

  setRole(role: string) {
    this.userRole.next(role);
    localStorage.setItem('userRole', role);
  }

  getRole(): string | null {
    return this.userRole.value;
  }

  getRoleObservable(): Observable<string | null> {
    return this.userRole.asObservable();
  }


  isLoggedIn(): boolean {
    return !!this.accessToken.value;
  }


  login(payload: { username: string; password: string }): Observable<any> {
    return this.http.post<{
      accessToken: string;
      refreshToken: string;
      firstName: string;
      lastName: string;
      username: string;
    }>('https://dummyjson.com/auth/login', payload).pipe(
      tap(res => {
        this.setTokens(res.accessToken, res.refreshToken);
        this.setRole('user');
        this.router.navigate(['/']);
      })
    );
  }

  logout() {
    this.clearTokens();
    this.userRole.next(null);
    this.router.navigate(['/login']);
  }

  refreshAccessToken(): Observable<any> {
    return this.http.post<{ accessToken: string }>('/auth/refresh', {}).pipe(
      tap(res => {
        this.setTokens(res.accessToken);
      })
    );
  }
}
