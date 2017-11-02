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
    this.getCitys();
  }

  /************************* 定义********************************/
  msgs: any[] = [];                                  //消息
  cars: any;                                             // get获取数据 {}
  data: any[];                                           //数据数组
  totalPages: number = 1;                                //获取总页数
  totalCount: number = 0;                                //总条目数
  gotoPage: number = 1;                                  //前往页数

  /************************* 获取数据 ********************************/
  get(pageNo) {
    let params = {
      'pageNo': pageNo,
    };
    this.myService.get(params)
      .then(cars => {
          this.cars = cars;

        }, error => console.log(error)
      )
      .then(
        () => {
          if (this.cars) {
            this.data = [];

            this.data = this.cars.data;
            if (this.data.length == 0) {
              this.data = [];
            }                                                                                   //没有数据时跳到第一页
            this.totalPages = this.cars.totalPage;
            this.totalCount = this.cars.totalCount;
          } else {
            this.data = [];
          }
        }
      );
  }

  /************************* 分页函数 ********************************/
  // paginate(event) {
  //   const num = event.page + 1;
  //   this.gotoPage = num;
  //   this.get(num);
  // }

  /************************* 前往页数 ********************************/
  // blurGotoPage() {
  //   if (this.gotoPage > this.totalPages) {
  //     this.gotoPage = this.totalPages;
  //   }
  //   this.get(this.gotoPage);
  // }


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

  /************************* 省级联动 ********************************/
  citys: any;                                             //省级 数据
  city1Array: any = [];
  city1NgModel: any;
  city2Array: any = [];
  city2NgModel: any;
  city2Disabled: boolean = true;
  city3Array: any = [];
  city3NgModel: any;
  city3Disabled: boolean = true;
  //获取省市区县数据
  getCitys() {
    this.myService.getCitys()
      .then(citys => {
          this.citys = citys;
        }, res => console.log(res)
      )
      .then(
        () => {
          for (let i in  this.citys) {
            if (parseInt(i) % 10000 === 0) {
              this.city1Array.push({
                label: this.citys[i],
                value: i
              });
            }

          }
        }
      );
  }

  //省级 或 直辖市 级 下拉框change 事件
  city1onChange() {
    this.city2Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 2)) == this.city1NgModel.substring(0, 2)) {
        if (parseInt(i) % 100 === 0 && parseInt(i) % 10000 != 0) {
          this.city2Array.push({
            label: this.citys[i],
            value: i
          });
        }
        if (i.substring(0, 2) == '11' || i.substring(0, 2) == '12' || i.substring(0, 2) == '82' || i.substring(0, 2) == '81'
          || i.substring(0, 2) == '50' || i.substring(0, 2) == '31'
        ) {
          if (parseInt(i) % 10000 != 0) {
            this.city2Array.push({
              label: this.citys[i],
              value: i
            });
          }
        }
      }
    }
    if (this.city2Array.length == 0) {
      this.city2Disabled = true;
      this.city3Disabled = true;
      this.city3Array = [];
    } else {
      this.city2Disabled = false;
      this.city3Disabled = true;
      this.city3Array = [];
    }
  }

  //第二个个下拉框change 事件
  city2onChange() {
    this.city3Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 4)) == this.city2NgModel / 100) {
        if (parseInt(i) % 100 != 0) {
          this.city3Array.push({
            label: this.citys[i],
            value: i
          });
        }
      }
    }
    if (this.city3Array.length == 0) {
      this.city3Disabled = true;
    } else {
      this.city3Disabled = false;
    }
  }
  handle($event){
    console.log($event)
  }

}
