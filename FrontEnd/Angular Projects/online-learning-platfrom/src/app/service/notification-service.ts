import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppNotification } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:5555/notifications'; 

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<AppNotification[]> {
    return this.http.get<AppNotification[]>(this.apiUrl);
  }

  getNotificationById(id: number): Observable<AppNotification> {
    return this.http.get<AppNotification>(`${this.apiUrl}/${id}`);
  }

  addNotification(notification: AppNotification): Observable<AppNotification> {
    return this.http.post<AppNotification>(this.apiUrl, notification);
  }

  updateNotification(id: number, notification: AppNotification): Observable<AppNotification> {
    return this.http.put<AppNotification>(`${this.apiUrl}/${id}`, notification);
  }

  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
