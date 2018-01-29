import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MenubarComponent } from './core/menubar.component';
import { LoginComponent } from './core/login.component';
import { CustomerComponent } from './customer.component';
import { CusttranComponent } from './custtran.component';
import { AddcustomerComponent } from './addcustomer.component';
import { AddtranComponent } from './addtran.component';

const routes = [
  { path: '', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'CustTransaction', component: CusttranComponent },
  { path: 'Customer/:id', component: AddcustomerComponent },
  { path: 'NewCustomer', component: AddcustomerComponent },
  { path: 'CustTransaction/:id', component: AddtranComponent },
  { path: 'NewTrans', component: AddtranComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    CustomerComponent,
    CusttranComponent,
    AddcustomerComponent,
    AddtranComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
