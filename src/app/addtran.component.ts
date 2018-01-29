import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addtran',
  templateUrl: './addtran.component.html'
})
export class AddtranComponent implements OnInit {

  _id: string
  customerid: string;
	when: string;
  ltr: string;
  	
  editMode: boolean = false;

  constructor(private apiservice: ApiService,
    private route: ActivatedRoute,
    private router: Router  
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params["id"]) {
        this._id = params["id"];
        this.editMode = true;
        console.log(this.editMode);
        this.apiservice.getCustTransById(this._id).subscribe(customer => {
          this.customerid = customer.customerid;
          this.when = customer.when;
          this.ltr = customer.ltr;         
        });
      }
    });
  }

  addCustTran() {
    if(this.editMode) {
      let custtranData = {
        customerid: this.customerid,
        when: this.when,
        ltr: this.ltr
      }

      this.apiservice.updateCustTran(this._id,custtranData).subscribe(result => {
          this.router.navigate(["/CustTransaction"]);       
      });
    } else {
      let custtranData = {
        customerid: this.customerid,
        when: this.when,
        ltr: this.ltr
      }

      this.apiservice.addCustTran(custtranData).subscribe(res => {        
          this.router.navigate(["/CustTransaction"]);
      });
    }
  }

}

