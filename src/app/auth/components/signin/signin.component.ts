import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenService } from '../../_services/authen.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  dataForm: any = {};
  isLoggedIn = false;
  isLoggedFailed = false;
  errMessage: '';

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private authService: AuthenService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.sigin({email:this.dataForm.email,password:this.dataForm.password}).subscribe(
      data=>{
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

      },
      err=>{
        console.log(err)
      }
    )
  }

}
