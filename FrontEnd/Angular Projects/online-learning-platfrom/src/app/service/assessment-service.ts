import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  
  private apiUrl: string = "http://localhost:4444/api/assessments";

  private username = 'admin';
  private password = 'admin123';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
    return new HttpHeaders({
      Authorization: basicAuth,
      'Content-Type': 'application/json'
    });
  }

  addAssessment(assessment: Assessment): Observable<Assessment> {
    return this.http.post<Assessment>(this.apiUrl, assessment, { headers: this.getAuthHeaders() });
  }

  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getAssessmentById(id: number): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  updateAssessment(id: number, assessment: Assessment): Observable<Assessment> {
    return this.http.put<Assessment>(`${this.apiUrl}/${id}`, assessment, { headers: this.getAuthHeaders() });
  }

  deleteAssessment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
      responseType: 'text' as 'json'
    });
  }
}
