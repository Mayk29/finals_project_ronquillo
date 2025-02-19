import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
 
    title = 'finals_project';
    anytext: string = "";
    submitted: boolean = false;
  
    onSubmit(){
      this.submitted = true;
    }

}
