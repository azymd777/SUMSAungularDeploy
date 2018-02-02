import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-custtran',
  templateUrl: './custtran.component.html'
})
export class CusttranComponent implements OnInit {

  custTranList
  cmrid:string
  frmdate:string
  todate:string
  total:Number
  constructor( private apiservice: ApiService ){}

  ngOnInit() {
    this.apiservice.getCustTrans().subscribe(custtranlist => {
      this.custTranList = custtranlist; 
      this.total = this.getTrans(custtranlist)
    });   
   
  }
  searchTran() {

      let searchData = {
        customerid: this.cmrid,
        frmdate: this.frmdate,
        todate: this.todate
      } 
      this.apiservice.searchCustTrans(searchData).subscribe(custtranlist => {
        this.custTranList = custtranlist; 
        this.total = this.getTrans(custtranlist)
      }); 

    }

    getTrans = function (obj) {
      var total = 0;
      for (var i = 0; i <obj.length; i++) {
             total = total + obj[i].ltr;
             console.log(total)
           }
      return total;
  }
}
