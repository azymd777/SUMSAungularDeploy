import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html'
})
export class AddcustomerComponent implements OnInit {

  _id: string
  customerid: string;
	name: string;
	contactno: string;
	add1: string;
	add2: string;
	pincode: string;
	
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
        this.apiservice.getCustomerById(this._id).subscribe(customer => {
          this.customerid = customer.customerid;
          this.name = customer.name;
          this.contactno = customer.contactno;
          if(customer.address!=null)
          {
          this.add1 = customer.address.add1;
          this.add2 = customer.address.add2;
          this.pincode = customer.address.pincode;
          }
        });
      }
    });
  }

  addCustomer() {
    if(this.editMode) {
      let customerData = {
        customerid: this.customerid,
        name: this.name,
        contactno: this.contactno,
        address:{
          add1: this.add1,
          add2: this.add2,
          pincode: this.pincode
        }
      }

      this.apiservice.updateCustomer(this._id,customerData).subscribe(result => {
          this.router.navigate(["/Customer"]);       
      });
    } else {
      let customerData = {
        customerid: this.customerid,
        name: this.name,
        contactno: this.contactno,
        address:{
          add1: this.add1,
          add2: this.add2,
          pincode: this.pincode
        }
      }

      this.apiservice.addCustomer(customerData).subscribe(res => {        
          this.router.navigate(["/Customer"]);
      });
    }
  }

}
