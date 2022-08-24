import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentComponent } from './components/student/student.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
