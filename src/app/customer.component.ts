import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  customerList
  constructor( private apiservice: ApiService ){}
  ngOnInit() {    
    this.apiservice.getCustomers().subscribe(customerlist => {
  		this.customerList = customerlist;
  	});
   
  } 
}