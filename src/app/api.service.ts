import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService
{

    customerList = []
    TransList = []
    path = environment.path
    constructor ( private http: Http){}
    getUsers()
    {
        return this.http.get(this.path + '/user').map(res =>res.json())
    }  

    getCustomers()
    {
        return this.http.get(this.path + '/customer').map(res =>res.json())        
    }
    getCustomerById(id)
    {
        return this.http.get(this.path + '/customer/'+id).map(res =>res.json())        
    }
    updateCustomer(id,customerdata)
    {
        return this.http.put(this.path + '/customer/'+id,customerdata).map(res =>res)      
    }
    addCustomer(customerdata)
    {
        return this.http.post(this.path + '/customer',customerdata).map(res =>res)        
    }
    getCustTrans()
    {
        return this.http.get(this.path + '/custtran').map(res =>res.json())
    }
    getCustTransById(id)
    {
        return this.http.get(this.path + '/custtran/'+id).map(res =>res.json())        
    }
    updateCustTran(id,custTrandata)
    {
        return this.http.put(this.path + '/custtran/'+id,custTrandata).map(res =>res)      
    }
    addCustTran(custTrandata)
    {
        return this.http.post(this.path + '/custtran',custTrandata).map(res =>res)        
    }
    login(logindata)
    {
        this.http.post(this.path + '/user/login',logindata).map(res =>res)
    }
}