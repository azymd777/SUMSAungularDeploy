import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-custtran',
  templateUrl: './custtran.component.html'
})
export class CusttranComponent implements OnInit {

  custTranList
  constructor( private apiservice: ApiService ){}

  ngOnInit() {
    this.apiservice.getCustTrans().subscribe(custtranlist => {
  		this.custTranList = custtranlist; 
  	});
   
  }

}
