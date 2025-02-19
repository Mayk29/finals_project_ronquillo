import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'finals_project';
  fullname: string = "";
  student_num: string= "";
  email: string = "";
  message: string ="";
  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

}