import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../share/users/user.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  phoneNumber: string;
  recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor( private router : Router, 
    private userSrv : UserService) { }
  
  ngOnInit(){
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  onVerifyPage(){

    this.router.navigateByUrl('home');
    /*this.userSrv.onSignUp(this.phoneNumber, new firebase.auth.RecaptchaVerifier('recaptcha-container')).then((data)=>{
      this.router.navigateByUrl('verify/'+data);
    }).catch(err =>{
      console.error(err);
    })*/
    
  }

  onLoginPage(){
    this.router.navigateByUrl('login');
  }

}
