import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id!: number;
  student!: Student;

  constructor(public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('sid')!);

    this.apiService.GetStudent(this.id).subscribe((data: Student) => {
      console.log(data);
      this.student = data;
    });
  }

}
