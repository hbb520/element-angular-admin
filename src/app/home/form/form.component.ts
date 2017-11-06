import {Component, OnInit} from '@angular/core';
import {pageAnimation} from '../../common/public-data';
import {MyService} from '../../services/service';

@Component({
  selector: 'app-data-table',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    pageAnimation
  ]
})
export class FormComponent implements OnInit {
  constructor(private myService: MyService) {

  }

  ngOnInit() {

  }

  /************************* 定义********************************/
  value1: any;
  inputNumberModel: number = 1;
  inputModel: any;
  selectModel: any;
  radioModel: any;
  checkboxModel: boolean = false;
  checkboxGroupModel: any[] = [];
  disabledOptions: any[] = [{
    value: '1',
    label: 'disabled',
  }, {
    value: '2',
    label: 'normal',
  }];

  handle($event) {
    console.log($event);
  }

  uploadSuccess(e) {
    console.log(e);
  }
  clearClickHandle(e){
    console.log(e)
  }
}
