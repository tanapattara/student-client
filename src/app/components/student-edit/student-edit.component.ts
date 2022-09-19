import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/models/Student';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id!: number;
  student!: Student;
  form!: FormGroup;

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('sid')!);
    this.apiService.GetStudent(this.id).subscribe((data: Student) => {
      this.student = data;
    });

    this.form = new FormGroup({
      studentid: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      major: new FormControl('')
    });
  }
  get formValidate() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    let editedStudent = new Student();
    editedStudent.id = this.id;
    editedStudent.studentid = this.form.controls['studentid'].value;
    editedStudent.name = this.form.controls['name'].value;
    editedStudent.major = this.form.controls['major'].value;

    this.apiService.updateStudent(this.id, editedStudent).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl('student');
      }
    })
  }

}
