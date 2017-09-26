import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { FormComponent} from './form.component';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,

    RouterModule.forChild([
      { path:'',component:FormComponent}
    ])
  ],
  declarations: [FormComponent],
  exports:[RouterModule]
})
export class FormModule { }
