import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../../views/interface/icustomer';
import { Iorder } from '../../views/interface/iorder';
import {CustomerService} from '../../services/customer.service';
import {OrderService} from '../../services/order.service'
import {Itechnision} from '../../views/interface/itechnision';
import {TechnisionService} from '../../services/technision.service'
import {Iservice} from  '../../views/interface/iservice'
import {ServiceService} from '../../services/service.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
Customer:Icustomer;
OrderCustomerList:Iorder[]=[{
   status:true,
    description:"dd", 
    total_cost:0,
    technical:" ",
    service:" ",
      
}];
TechnicalList:Itechnision[];
ServiceList:Iservice[];
Service_name:Iservice[];
Technical_name:Itechnision[];

constructor(private _apiCustomer:CustomerService, private _apiCustomerOrder:OrderService,
  private _apiTechnical:TechnisionService, private _apiService:ServiceService) { }
   ngOnInit(): void {
    this._apiCustomer.getCustomer().subscribe(
      //(data)=>console.log(data),
      (data)=>this.Customer=data,
      (err)=>console.log(err)
    );
    this._apiTechnical.getTechnisions().subscribe(
      (data)=>this.TechnicalList=data,
      (err)=>console.log(err)
    );
    this._apiService.getAllServices().subscribe(
      (data)=>this.ServiceList=data,
      (err)=>console.log(err)
    )
    this._apiCustomerOrder.getAllOrders().subscribe(
      (data)=>this.getAllTechServ(data),
      (err)=>console.log(err) 
    );
    
    
  }
  getAllTechnicalName(id:number|string):string{
      this.Technical_name=this.TechnicalList.filter(s => s.id == id)
      console.log(this.Technical_name[0].username)
      return this.Technical_name[0].username      
  }
  getAllServiceName(id:number|string):string{
    this.Service_name=this.ServiceList.filter(s => s.id == id)
      console.log(this.Service_name[0].type)
      return this.Service_name[0].type
  }
  getAllTechServ(OrderCustomerList:Iorder[]) {
      
    //newOrderCustomer.description=" ssssss "
    //console.log(OrderCustomerList)
      for(var orderObj of OrderCustomerList){
        var newOrderCustomer:Iorder={
    status:true,
    description:" ", 
    total_cost:0,
    technical:" ",
    service:" ",
      };
      var technical_name:string=this.getAllTechnicalName(orderObj.technical)
      var service_name:string=this.getAllServiceName(orderObj.service)
      console.log("Technical "+technical_name)
      console.log("Services "+service_name)
      newOrderCustomer.status=orderObj.status;
      newOrderCustomer.total_cost=orderObj.total_cost;
      newOrderCustomer.description=orderObj.description;
      newOrderCustomer.technical=technical_name;
      newOrderCustomer.service=service_name;
      this.OrderCustomerList.push(newOrderCustomer)
    
      }
     
  }
}
