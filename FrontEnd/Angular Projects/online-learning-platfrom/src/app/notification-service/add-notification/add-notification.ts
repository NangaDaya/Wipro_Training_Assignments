import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../service/notification-service';
import { AppNotification } from '../../types';

@Component({
  selector: 'app-add-notification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-notification.html',
  styleUrls: ['./add-notification.css']
})
export class AddNotification {
  notification: AppNotification = {
    userId: 0,
    message: '',
    read: false,
    createdAt: new Date().toISOString()
  };
  message = '';

  constructor(private notificationService: NotificationService, private router: Router) {}

  onSubmit() {
    this.notificationService.addNotification(this.notification).subscribe({
      next: () => {
        alert("Notification added successfully!");
        this.router.navigate(['/notifications']);
      },
      error: (err) => {
        console.error(err);
        this.message = "Error adding notification!";
      }
    });
  }
}
