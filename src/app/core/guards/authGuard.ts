import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn=this.authService.isLoggedIn()
    // const role = this.authService.getRole();
    if (isLoggedIn) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}