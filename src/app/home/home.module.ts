import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {homeRoutes} from './home.routes';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PageNotFoundComponent} from '../not-found.component';
import { ElModule } from 'element-angular'



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    ElModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
})
export class HomeModule {
}
