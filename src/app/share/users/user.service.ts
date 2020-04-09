import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor() { }

  onSignUp( phoneNumber, appVefify){
    let promise = new Promise((resolve, reject)=>{
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVefify).then(confirmResult =>{
        resolve(confirmResult);
      }).catch(err =>{
        reject(err);
      });
    });
    return promise;
  }

  sendCodeVerification(code : string, confirmResult : firebase.auth.ConfirmationResult){
    let promise = new Promise((resolve, reject)=>{
      confirmResult.confirm(code).then(result =>{
        resolve(result);
      }).catch(err =>{
        reject(err);
      });
    });
    return promise;
  }

}
