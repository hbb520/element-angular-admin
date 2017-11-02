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

  // 数据获取 根据 ID 获取单个
  private getIdUrl = '/shop';

  getId(id): Promise<any> {
    let url = this.getIdUrl + '?id=' + id;
    return this.ajax.get(url)
      .toPromise()
      .then(this.extractJson);
  }

  // 行业获取
  private getIndustriesUrl = '/industries';

  getIndustries(): Promise<any[]> {
    return this.ajax.get(this.getIndustriesUrl)
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

  // 新增设计导购

  private addUserUrl = '/shop/user';

  addUser(shopId, params): Promise<any> {
    let url = this.addUserUrl + '?shopId=' + shopId;
    return this.ajax.post(url, params)
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

  // 修改设计导购

  private editUserUrl = '/users';

  editUser(params): Promise<any> {
    return this.ajax.put(this.editUserUrl, params)
      .toPromise()
      .then((res) => res);
  }

  //删除设计导购
  private deleteUserUrl = '/users';

  deleteUser(id): Promise<any> {
    let url = `${this.deleteUserUrl}?ids=${id}`;
    return this.ajax.delete(url)
      .toPromise()
      .then((res) => res);
  }

  // 启用设计导购


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
