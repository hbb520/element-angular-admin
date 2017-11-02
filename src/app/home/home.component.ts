import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {pageAnimation} from '../common/public-data';


@Component({
  selector: 'app-workspace',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    pageAnimation
  ]
})
export class HomeComponent implements OnInit {

  constructor( public router: Router) {
  };

  ngOnInit() {

  }

  isCollapsed: boolean = false;

  /************************* 退出登录 ********************************/
  loginOut() {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('menu111');
    sessionStorage.removeItem('realname');
    this.router.navigateByUrl('login');
  }
}
