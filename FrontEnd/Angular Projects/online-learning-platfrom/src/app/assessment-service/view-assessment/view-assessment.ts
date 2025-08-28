import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AssessmentService } from '../../service/assessment-service';
import { Assessment } from '../../types';

@Component({
  selector: 'app-view-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-assessment.html',
  styleUrls: ['./view-assessment.css']
})
export class ViewAssessment implements OnInit {
  assessments: Assessment[] = [];
  errorMessage = '';

  constructor(private assessmentService: AssessmentService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.loadAssessments();
  }

  loadAssessments() {
    this.assessmentService.getAssessments().subscribe({
      next: (data) => {
        this.assessments = Array.isArray(data) ? data : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch data..';
        console.error(err);
      }
    });
  }

  deleteAssessment(id: number | undefined) {
    if (confirm('Are you sure to delete this assessment?')) {
      this.assessmentService.deleteAssessment(id!).subscribe({
        next: () => {
          alert('Assessment deleted successfully');
          this.loadAssessments();
        },
        error: (err) => {
          console.error(err);
          alert("Failed to delete assessment");
        }
      });
    }
  }

  editAssessment(id: number | undefined) {
    this.router.navigate(['/edit-assessment', id]);
  }
}
