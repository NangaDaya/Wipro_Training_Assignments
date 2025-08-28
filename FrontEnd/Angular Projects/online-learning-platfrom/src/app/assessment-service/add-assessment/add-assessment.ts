import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AssessmentService } from '../../service/assessment-service';

@Component({
  selector: 'app-add-assessment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-assessment.html',
  styleUrls: ['./add-assessment.css']
})
export class AddAssessment {
  assessment = {
    title: '',
    description: '',
    totalMarks: 0,
    passMarks: 0
  };
  message = '';

  constructor(private assessmentService: AssessmentService, private router: Router) {}

  onSubmit() {
    this.assessmentService.addAssessment(this.assessment).subscribe({
      next: () => {
        alert("Assessment added successfully!");
        this.router.navigate(['/assessment']);
      },
      error: (err) => {
        console.error(err);
        this.message = "Error adding assessment!";
      }
    });
  }
}
