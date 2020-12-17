import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../_services/authen.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dataForm: any={};
  isSuccessful = false;
  isFailed = false;
  errMessage = '';

  constructor(private authService: AuthenService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signup(this.dataForm).subscribe(
      data => {
        console.log(data)
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errMessage = err.error.message;
        console.log(err)
        this.isFailed = true;
      }
    )
  }

}
