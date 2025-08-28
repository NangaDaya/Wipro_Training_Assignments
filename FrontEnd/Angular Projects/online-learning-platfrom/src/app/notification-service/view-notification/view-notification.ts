import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../service/notification-service';
import { AppNotification } from '../../types';

@Component({
  selector: 'app-view-notification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-notification.html',
  styleUrls: ['./view-notification.css']
})
export class ViewNotification implements OnInit {
  notifications: AppNotification[] = [];
  errorMessage = '';

  constructor(private notificationService: NotificationService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = Array.isArray(data) ? data : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch data..';
        console.error(err);
      }
    });
  }

  deleteNotification(id: number | undefined) {
    if (confirm('Are you sure to delete this notification?')) {
      this.notificationService.deleteNotification(id!).subscribe({
        next: () => {
          alert('Notification deleted successfully');
          this.loadNotifications();
        },
        error: (err) => {
          console.error(err);
          alert("Failed to delete notification");
        }
      });
    }
  }

  editNotification(id: number | undefined) {
    this.router.navigate(['/edit-notification', id]);
  }
}
