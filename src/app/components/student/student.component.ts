import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Student } from 'src/app/models/Student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  listOfStudent: Student[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetAllStudents().subscribe({
      next: (data) => {
        this.listOfStudent = data as Student[];
        console.log(this.listOfStudent);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  deleteStudent(id: number) {
    this.apiService.deleteStudent(id).subscribe({
      next: res => {
        this.listOfStudent = this.listOfStudent.filter(item => item.id !== id);
        console.log('Student deleted successfully!');
      }
    })
  }

}
