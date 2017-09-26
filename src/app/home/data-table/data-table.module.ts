import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DataTableComponent} from "./data-table.component";
import {Details} from './details';
import {ElModule} from 'element-angular/release';




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    ElModule,

    RouterModule.forChild([
      { path:'',component:DataTableComponent},
      { path: 'details/:id',  component:Details },
    ])
  ],
  declarations: [DataTableComponent,Details],
  exports:[RouterModule]
})
export class MyDataTableModule { }
