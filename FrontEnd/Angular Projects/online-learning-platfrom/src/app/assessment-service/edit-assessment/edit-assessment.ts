import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Assessment } from '../../types';
import { AssessmentService } from '../../service/assessment-service';

@Component({
  selector: 'app-edit-assessment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-assessment.html',
  styleUrls: ['./edit-assessment.css']
})
export class EditAssessment implements OnInit {
  id!: number;
  assessment: Assessment = {
    id: 0,
    title: '',
    description: '',
    totalMarks: 0,
    passMarks: 0
  };

  constructor(private route: ActivatedRoute, private assessmentService: AssessmentService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadAssessment();
  }

  loadAssessment() {
    this.assessmentService.getAssessmentById(this.id).subscribe({
      next: (data) => this.assessment = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    this.assessmentService.updateAssessment(this.id, this.assessment).subscribe({
      next: () => {
        alert("Assessment updated successfully!");
        this.router.navigate(['/assessment']);
      },
      error: (err) => {
        console.error(err);
        alert("Failed to update assessment!");
      }
    });
  }
}
