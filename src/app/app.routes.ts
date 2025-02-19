import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

export const routes: Routes = [
    {path: 'template-driven', component : TemplateDrivenComponent},
    {path: 'reactive', component : ReactiveComponent},
    {path: 'form-validation', component : FormValidationComponent},
    { path: '', component: HomeComponent }
];
