import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
    public errorMsg = '';
    uid: string;
    pwd: string;    
    constructor(
      private authservice: AuthService,
      private router: Router) {}
 
    login() {
        let logindata = {
          uid : this.uid,
          pwd : this.pwd
        }
    try{
      this.authservice.login(logindata)
      this.router.navigate(["/Customer"]);
    }
    catch(err)
    {
      console.log(err)
      this.errorMsg = 'Failed to login';
    }         
    }


}
