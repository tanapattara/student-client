import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {
    this.studentForm = this.formBuilder.group({
      name: [''],
      studentid: [''],
      major: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.apiService.AddStudent(this.studentForm.value)
      .subscribe({
        next: (res) => {
          console.log('Data added successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/student'))
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
