import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {appRoutes} from './app.routes';
import {NgProgressModule} from 'ngx-progressbar';
import {Ajax} from './common/ajax';
import { ElModule } from 'element-angular'
import {MyService} from './services/service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgProgressModule,
    ElModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    Ajax,
    MyService
  ],
  bootstrap: [AppComponent]
})
/**                     官方推荐将所有的服务放在 app.module 里
 *  Ajax                这是一个把http封装成ajax的服务
 *  LoginService        登录
 *  HomeService         工作区域服务
 *
 *
 *
 * */
export class AppModule {
}
