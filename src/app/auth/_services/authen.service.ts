import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';


const AUTH_API = 'http://localhost:3000/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  options:{
      observe: 'response'
  }

};

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  public sigin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(AUTH_API + `/signin`, {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  public signup(user:UserModel): Observable<any>{
    console.log(user.username)
    return this.http.post(AUTH_API+`/signup`,{
      username:user.username,
      email:user.email,
      password: user.password
    },httpOptions)
  }

  logOut():void{
    this.isLoggedIn = false;
  }


}
