import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  loginForm: FormGroup;
  email : string = "";
  password : string ="";
 
  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

  onSubmit(data: { email: string, password: string }) {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      this.email = data.email;
      this.password = data.password;
      } else {
        console.log('Form Not Valid');
    }
  }

}
