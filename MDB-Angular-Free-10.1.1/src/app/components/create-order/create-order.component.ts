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
  ser_id:number;
  total_Cost:number;
  prList:Isubproduct;
  

  

  constructor(private _activatedRoute:ActivatedRoute,private _apiSubserv:SubserviceService,
              private _apiTech:TechnisionService,private _apiproduct:SubproductService,
              private _apiServ:ServiceService,private _apiorder:OrderService,
              private _router:Router) {

   
    this.prList={
      name: "",
      image:"",
      cost:0,
      category:0,
      state:false,


    };
    this.total_Cost=0;
    this.order={
      
      date:null,
      description:null,
      total_cost:0,
      technical:null,
      service:null, 
      sub_service:[],
      products:[],

    }
    
   }

  ChangeSubService(su_id:number) {
    //console.log(id_id);
    this.total_Cost=0;
    this._apiSubserv.getSubServicesById(su_id).subscribe(
    //(res)=>console.log(res),
    (res)=>this.SubServiceList=res,
    (err)=>console.log(err)

  );

  }

  AddToCart(pro:Isubproduct){
    console.log(this.prList);
    this.prList = pro;
    console.log(this.prList);
  }
  ChangeCost(co:number){
    //console.log(co);
    //console.log(this.total_Cost);
     this.total_Cost += co;
    // console.log(this.total_Cost);
     this.order.total_cost=this.total_Cost;

  }

  ngOnInit(): void {  
    //console.log(Number(localStorage.getItem('ser_id')));
  this.ser_id=Number(localStorage.getItem('ser_id'));

  this._apiSubserv.getSubServicesById(this.ser_id).subscribe(
    //(res)=>console.log(res),
    (res)=>this.SubServiceList=res,
    (err)=>console.log(err)
  );
    

  this._apiTech.getTechnisionsByJob(this.ser_id).subscribe(
    (data)=>console.log(data),
    //(data)=>this.TechnisionList=data,
    (err)=>console.log(err)
  );
  // getTechnisionsByJob
  // console.log(this.TechnisionList.filter(tec=>tec.job=="None"));


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
    this._apiorder.insertOrder(this.order).subscribe(
      (data)=>this._router.navigateByUrl('/NewOrder'),
      (err)=>console.log(err)
    )
  }
  
  
  
}
