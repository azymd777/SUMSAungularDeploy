import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
    public errorMsg = '';
    logindata = {}
    constructor(
      private apiservice: ApiService) {}
 
    login() {
        if(!this.apiservice.login(this.logindata)){ 
            this.errorMsg = 'Failed to login';
        }
    }


}
