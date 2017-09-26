/**
 * 登录
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {
  constructor(private http: Http) {}
  //登录
  private loginUrl = 'assets/login.json';
  login(userToken:string): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' ,"Authorization": userToken});
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.loginUrl,options)
      .toPromise()
      .then(res=>res)
      .catch(res=>res);
  }

}//class end
