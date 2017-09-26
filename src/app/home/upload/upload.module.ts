import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import { UploadComponent} from './upload.component';
import {NgUploaderModule} from 'ngx-uploader';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    ReactiveFormsModule,
    NgUploaderModule,

    RouterModule.forChild([
      { path:'',component:UploadComponent}
    ])
  ],
  declarations: [UploadComponent],
  exports:[RouterModule]
})
export class UploadModule { }
