import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationServiceService } from './services/notification-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-custom',
  imports: [CommonModule],
  templateUrl: './notification-custom.component.html',
  styleUrl: './notification-custom.component.css'
})
export class NotificationCustomComponent {
  notifications: any[] = [];
  loading = false;

  // constructor(private notificationService: NotificationServiceService) {}

  // ngOnInit() {
  //   this.loadNotifications();
  // }

  // loadNotifications() {
  //   this.loading = true;
  //   this.notificationService.getNotifications().subscribe({
  //     next: (res) => {
  //       this.notifications = res.slice(0, 5);
  //       this.loading = false;
  //     },
  //     error: () => this.loading = false
  //   });
  // }
  // closeNotification(){

  // }
  


}
