import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../service/notification-service';
import { AppNotification } from '../../types';

@Component({
  selector: 'app-edit-notification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-notification.html',
  styleUrls: ['./edit-notification.css']
})
export class EditNotification implements OnInit {
  id!: number;
  notification: AppNotification = {
    id: 0,
    userId: 0,
    message: '',
    read: false,
    createdAt: new Date().toISOString()
  };

  constructor(private route: ActivatedRoute, private notificationService: NotificationService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadNotification();
  }

  loadNotification() {
    this.notificationService.getNotificationById(this.id).subscribe({
      next: (data) => this.notification = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    this.notificationService.updateNotification(this.id, this.notification).subscribe({
      next: () => {
        alert("Notification updated successfully!");
        this.router.navigate(['/notifications']);
      },
      error: (err) => {
        console.error(err);
        alert("Failed to update notification!");
      }
    });
  }
}
