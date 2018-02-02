import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit {
  
  constructor(private authservice: AuthService) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token')
 }
  ngOnInit() {
  }
  logout()
  {
    this.authservice.logout()
  }
}
