import { Component, OnInit , Input } from '@angular/core';
import { IsubService } from '../../views/interface/isub-service';
import { SubserviceService } from '../../../app/services/subservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Itechnision } from 'src/app/views/interface/itechnision';
import { TechnisionService } from 'src/app/services/technision.service';
import {  Isubproduct } from 'src/app/views/interface/isubproduct';
import { SubproductService } from 'src/app/services/subproduct.service';
import { ServiceService } from 'src/app/services/service.service';
import { Iservice } from 'src/app/views/interface/iservice';
import { Iorder } from 'src/app/views/interface/iorder';
import { OrderService } from 'src/app/services/order.service';




@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
 
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  ProductList:Isubproduct[];
  TechnisionList:Itechnision[];
  SubServiceList:IsubService[];
  ServiceList:Iservice[];
  order:Iorder;


  

  constructor(private _activatedRoute:ActivatedRoute,private _apiSubserv:SubserviceService,
              private _apiTech:TechnisionService,private _apiproduct:SubproductService,
              private _apiServ:ServiceService,private _apiorder:OrderService,
              private _router:Router) {

    this.order={
      
      date:null,
      description:null,
      total_cost:null,
      technical:null,
      service:null, 
      sub_service:[],
      products:[],

    }
    
   }

  onChange(su_id) {
    //console.log(id_id);

    let pid=this._activatedRoute.snapshot.params['id'];
    this._apiSubserv.getSubServicesById(su_id).subscribe(
    //(res)=>console.log(res),
    (res)=>this.SubServiceList=res,
    (err)=>console.log(err)

  );

  }

  ngOnInit(): void {  
    
    

  this._apiTech.getTechnisions().subscribe(
    //(data)=>console.log(data),
    (data)=>this.TechnisionList=data,
    (err)=>console.log(err)
  );

  this._apiproduct.getAllProducts().subscribe(
    //(data)=>console.log(data),
    (data)=>this.ProductList=data,
    (err)=>console.log(err)
  );

  this._apiServ.getAllServices().subscribe(
    //(data)=>console.log(data),
    (data)=>this.ServiceList=data,
    (err)=>console.log(err)
  );

  }


  CreateOrder(){
    console.log(this.order);
    // this._apiorder.insertOrder(this.order).subscribe(
    //   (data)=>this._router.navigateByUrl('/NewOrder'),
    //   (err)=>console.log(err)
    // )
  }

}
