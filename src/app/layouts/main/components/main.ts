import { Component, OnInit, signal } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from '../../../../features/dashboard/components/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { ThemeToggleComponent } from "../../../shared/theme-toggle/theme-toggle.component";
import { AuthService } from '../../../../features/auth/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { BreadcrumbComponent } from '../../../shared/breadcrump/components/breadcrump';
import { decodeToken } from '../../../shared/utils/decodeToken';
import { SettingsService } from '../../../../features/settings2/services/settings.services';


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
    BreadcrumbComponent,
    
    
]
})
export class MainLayoutComponent implements OnInit {
  constructor( private authService:AuthService, public  theme:ThemeService,private settingsService:SettingsService){

  }
  avatarUrl: string = 'assets/images/icons/avatar.svg';
  
ngOnInit(): void {
  this.decodeUsername();
  this.settingsService.avatar$.subscribe(url=>{
    this.avatarUrl=url
  })
}

  isSidebarOpen = signal(true);
  isMenuOpen:boolean=false
   username:string=""
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
  decodeUsername(){
   const token=localStorage.getItem("accessToken")
  const usernamef =decodeToken(token).username
  this.username=usernamef
  }



}
