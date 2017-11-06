import {Component, OnInit} from '@angular/core';
import {pageAnimation} from '../../common/public-data';
import {MyService} from '../../services/service';
import {ElNotificationService, ElMessageService} from 'element-angular';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    pageAnimation
  ]
})
export class DataTableComponent implements OnInit {
  constructor(private  myService: MyService,
              private  notify: ElNotificationService,
              private message: ElMessageService) {
    this.message['success']('这是一条消息提示');
  }

  ngOnInit() {

    // this.get(1);
    setTimeout(() => {
      this.selectModel = '6';
    }, 2000);
    setTimeout(() => {
      this.selectModel = null;
    }, 4000);
  }

  /************************* 定义********************************/
  cars: any;                                             // get获取数据 {}
  data: any[] = [
    {
      "id": '5',
      "createTime": '1460514819000',
      "name": "好环境",
      "logo": "http://pic33.nipic.com/20131007/13644136_140929204101_2.jpg"
    }
  ];                                           //数据数组
  totalPages: number = 1;                                //获取总页数
  totalCount: number = 0;                                //总条目数
  inputModel: string;
  selectModel: string;
  datePpickerModel: string;
  dialogVisible: boolean = false;

  /************************* 获取数据 ********************************/
  get(pageNo) {
    let params = {
      'pageNo': pageNo,
      'input': this.inputModel,
      'datePpicker': this.datePpickerModel,
      'select': this.selectModel
    };
    this.myService.get(params)
      .then(res => {
          this.cars = res;
          if (this.cars) {
            this.data = [];
            let data = [];
            for (let i = 0; i < this.cars.data.length; i++) {
              let newDate = new Date();
              newDate.setTime(this.cars.data[i].createTime);
              this.cars.data[i].createTime = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + newDate.getMinutes();
              data.push({
                id: this.cars.data[i].id.toString(),
                name: this.cars.data[i].name.toString(),
                createTime: this.cars.data[i].createTime.toString(),
                logo: this.cars.data[i].logo.toString()
              });
            }
            this.data = data;
            console.log(this.data)
            if (this.data.length == 0) {
              this.data = [];
            }                                                                                   //没有数据时跳到第一页
            this.totalPages = this.cars.totalPage;
            this.totalCount = this.cars.totalCount;
          } else {
            this.data = [];
          }
        }, error => console.log(error)
      );
  }

  /************************* 分页函数 ********************************/
  paginateChange(event) {
    this.get(event);
  }


  /************************* 添加 ********************************/
  addShow() {

  }

  /************************* 添加 ********************************/
  add() {
    // let params = {
    //   'name': this.nameModel,
    // };
    // this.myService.add(params)
    //   .then(res => {
    //       console.log(res);
    //       this.dialog = false;
    //       this.msg(1, '添加成功');
    //     }, error => console.log(error)
    //   );
  }

  /************************* 编辑 ********************************/
  // editShow(car: Car) {
  //   this.editHtmlNgif = true;
  //   this.dialogHeader = '编辑';
  //   window.setTimeout(() => {
  //     this.dialog = true;
  //   }, 1);
  //   this.mySelectionObject = car;
  //   this.mySelectionId = car.id;
  //   this.nameModel = car.name;                                                  //当然这里是应该进行http请求的
  // }
  //
  // edit() {
  //   let params = {
  //     'id': this.mySelectionId,
  //     'name': this.nameModel,
  //   };
  //   this.myService.edit(params)
  //     .then(res => {
  //         console.log(res);
  //         this.dialog = false;
  //       }, error => console.log(error)
  //     );
  //   this.get(this.first + 1);                                                       //我们希望当数据停留在这一页时,分页页码也停留在此页
  // }

  /************************* 删除 ********************************/

  // deleteShow(car: Car) {
  //   this.deleteHtmlNgif = true;
  //   this.dialogHeader = '删除';
  //   window.setTimeout(() => {
  //     this.dialog = true;
  //   }, 1);
  //   this.mySelectionObject = car;
  //   this.deleteAllArrray = [car.id];
  // }
  //
  // delete() {
  //   this.myService.delete(this.deleteAllArrray)
  //     .then(res => {
  //         console.log(res);
  //         this.dialog = false;
  //       }, error => console.log(error)
  //     );
  //   this.get(this.first + 1);
  // }

  /************************* 批量删除 ********************************/
  // deleteAllShow() {
  //   console.log(this.mySelection);
  //   if (this.mySelection) {
  //     if (this.mySelection.length == 0) {
  //       this.msg(2, '请您至少勾选一条数据');
  //     } else {
  //       this.deleteAllHtmlNgif = true;
  //       this.dialogHeader = '批量删除';
  //       window.setTimeout(() => {
  //         this.dialog = true;
  //         this.deleteAllArrray = [];
  //         for (let i = 0; i < this.mySelection.length; i++) {
  //           this.deleteAllArrray.push(this.mySelection[i].id);
  //         }
  //       }, 1);
  //     }
  //   } else {
  //     this.msg(2, '请您至少勾选一条数据');
  //   }
  // }

  // deleteAll() {
  //   this.myService.delete(this.deleteAllArrray)
  //     .then(res => {
  //         console.log(res);
  //         this.dialog = false;
  //       }, error => console.log(error)
  //     );
  //   this.get(this.first + 1);
  // }


  handle(e: any) {
    console.log(e);

  }

}
