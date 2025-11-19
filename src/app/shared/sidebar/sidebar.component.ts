import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslatePipe } from '../../layouts/main/service/translate';
import { AuthService } from '../../../features/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from './service/sidebarService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [TranslatePipe,CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private authService:AuthService,private sideBarService:SidebarService) {}
  selectedItem:string="";
  ngOnInit(): void {
    this.sideBarService.selectedItem$.subscribe(item=>{
      this.selectedItem=item;
    })


  }


  @Input() isSidebarOpen:boolean=true
  @Output() toggleSidebarEvent=new EventEmitter<void>()

  
  logoOut() {
    this.authService.logout()
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit(); 


  }

  selectItem(item: string) {
    console.log("selected"+item)
    this.sideBarService.setSelectedItem(item); 
  }


}
