import { Injectable } from '@angular/core';

const TOKEN_KEY="auth-key"
const USER_KEY="user-key"

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  clearToken():void{
    window.sessionStorage.clear();
  } 

  public saveToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token)
  }

  public getToken(){  
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user){  
    window.sessionStorage.removeItem(USER_KEY);
    // convert object to json string
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  public getUser(){
    //convert json string to object
    return JSON.parse(sessionStorage.getItem(USER_KEY)); 
  }
}
