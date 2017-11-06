import {Injectable} from '@angular/core';
import {Http, Response}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Ajax} from '../common/ajax';                  //自己的ajax服务

@Injectable()
export class MyService {

  constructor(public ajax: Ajax, public http: Http) {
  }

  private extractJson(res: Response) {
    let body = res.json();
    return body || {};
  }

  // 数据获取
  private getUrl = 'assets/data/data.json';

  get(params): Promise<any[]> {
    return this.ajax.get(this.getUrl, params)
      .toPromise()
      .then(this.extractJson);
  }

  // 添加
  private addUrl = '/shop';

  add(params): Promise<any> {
    return this.ajax.post(this.addUrl, params)
      .toPromise()
      .then((res) => res);
  }

  // 编辑
  private editUrl = '/shop';

  edit(params): Promise<any> {
    return this.ajax.put(this.editUrl, params)
      .toPromise()
      .then((res) => res);
  }


  // 查询单个用户详情
  private getUserUrl = '/users';

  getUser(id): Promise<any> {
    let url = this.getUserUrl + '/' + id;
    return this.ajax.get(url)
      .toPromise()
      .then(this.extractJson);
  }


  //删除
  private deleteUrl = '/brands/delete';

  delete(params): Promise<any> {
    let url = this.deleteUrl + '?ids=' + params;
    return this.ajax.patch(url, params)
      .toPromise()
      .then((res) => res);

  }

  //最新省级 json  获取http://passer-by.com/data_location/list.json
  private citysUrl = 'http://passer-by.com/data_location/list.json';

  getCitys(): Promise<any[]> {
    let url = this.citysUrl;
    return this.http.get(url)
      .toPromise()
      .then(this.extractJson)
      .catch(res => res);
  }


}
