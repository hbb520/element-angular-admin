import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgProgressService} from 'ngx-progressbar';
import {homeRoutes} from './home/home.routes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  ngOnInit() {
    this.routerList.forEach(
      group => {
        this.componentList = group.children;
      }
    );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.progressService.start();
      }

      if (event instanceof NavigationEnd) {
        this.progressService.done();
        this.componentList.forEach(
          list => {
            if (this.router.url.indexOf(list.path) >= 0) {
              this.titleService.setTitle(list.title2);
              this.title1 = list.title1;
              this.title2 = list.title2;
            }
          }
        );
      }
    });
  }

  constructor(private router: Router, private titleService: Title, public progressService: NgProgressService) {
  };

  routerList = homeRoutes;
  componentList = [];
  title1: string;
  title2: string;
  refRowData: any;
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }];

  handle(ref: any) {
    console.log(ref.rowData);
    this.refRowData = ref.rowData;
  }
}
