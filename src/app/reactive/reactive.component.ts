import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
 
    title = 'form-app';
    userName: string ="";
    formdata: FormGroup = new FormGroup({
      userName: new FormControl("")
    });
    onClickSubmit(data: { userName: string}){
      this.userName = data.userName;
    }

}
