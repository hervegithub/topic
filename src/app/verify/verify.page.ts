import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../share/users/user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  verification: any;
  codeVerification: string;

  constructor(private router : ActivatedRoute,
    private route: Router, private userSrv : UserService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.verification = parseInt(params.get('verify'));
    });
  }

  verifyNumberWithCode(){
    this.userSrv.sendCodeVerification(this.codeVerification, this.verification).then((result)=>{
      this.route.navigateByUrl('home'+result);
    }).catch(err=>{
      alert(err);
    });
  }

}
