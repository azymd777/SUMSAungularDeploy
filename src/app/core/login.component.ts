import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
      private apiservice: ApiService,
      private router: Router) {}
 
    login() {
        let logindata = {
          uid : this.uid,
          pwd : this.pwd
        }

        this.apiservice.login(logindata).subscribe(result=>
          {
            console.log(result)
          if(!result){ 
            this.errorMsg = 'Failed to login';
          }
        else{
          this.router.navigate(["/Customer"]);
        }
      }
        )

        
    }


}
