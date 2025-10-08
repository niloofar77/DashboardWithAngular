import { Component, signal } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from '../../../../features/dashboard/components/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { ThemeToggleComponent } from "../../../shared/theme-toggle/theme-toggle.component";
import { AuthService } from '../../../../features/auth/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { BreadcrumbComponent } from '../../../shared/breadcrump/components/breadcrump';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  imports: [
    NgApexchartsModule,
    DashboardComponent,
    RouterLink,
    CommonModule,
    MenuComponent,
    RouterOutlet,
    ThemeToggleComponent,
    BreadcrumbComponent
]
})
export class MainLayoutComponent {
  constructor( private authService:AuthService, public  theme:ThemeService){

  }

 
  isSidebarOpen = signal(true);
  isMenuOpen:boolean=false
  toggleSidebar() {
    console.log("Toggling sidebar");
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }

  toggleMenu() {
    console.log("Toggling menu");
    this.isMenuOpen=!this.isMenuOpen
  }
  logoOut(){
    this.authService.logout()
  }
 


}
