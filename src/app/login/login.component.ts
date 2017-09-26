import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {Base64} from 'js-base64';
import {LoginService} from './login.service';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private myService: LoginService, private titleService: Title,) {
  }

  ngOnInit() {
    this.titleService.setTitle("登录");
  }


}
