import { Component, OnInit, Input } from '@angular/core';
import { IsubService } from '../../views/interface/isub-service';
import { SubserviceService } from '../../../app/services/subservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Itechnision } from 'src/app/views/interface/itechnision';
import { TechnisionService } from 'src/app/services/technision.service';
import { Isubproduct } from 'src/app/views/interface/isubproduct';
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
  ProductList: Isubproduct[];
  TechnisionList: Itechnision[];
  SubServiceList: IsubService[];
  ServiceList: Iservice[];
  order: Iorder;
  ser_id: number;
  total_Cost: number;
  cost_p:number;
  cost_s:number;
  validate:string;

 
 



  constructor(private _activatedRoute: ActivatedRoute, private _apiSubserv: SubserviceService,
    private _apiTech: TechnisionService, private _apiproduct: SubproductService,
    private _apiServ: ServiceService, private _apiorder: OrderService,
    private _router: Router) {

    this.cost_p=0;
    this.cost_s=0;
    this.total_Cost = this.cost_s + this.cost_p;
    this.order = {

      date: null,
      description: null,
      total_cost: 0,
      technical: null,
      service: null,
      sub_services: [],
      products: [],

    }

  }

  ChangeService(su_id: number) {
    //console.log(id_id);
    this.total_Cost = 0;
    this._apiSubserv.getSubServicesById(su_id).subscribe(
      //(res)=>console.log(res),
      (res) => this.SubServiceList = res,
      (err) => console.log(err)

    );
    this._apiTech.getTechnisionsByJob(su_id).subscribe(
      //(data)=>console.log(data),
      (data) => this.TechnisionList = data,
      (err) => console.log(err)
    );

  }




  ChangeCostP(p) {
         
    this.cost_p = 0;
    console.log(p);
    for (var val of p){
      var i = this.ProductList.filter(s => s.id == val);
      console.log(i[0].cost);
      this.cost_p += i[0].cost;

    }
    this.total_Cost=this.cost_p+this.cost_s;
   

}

  ChangeCostS(c) {
    this.cost_s = 0;
      
    console.log(c+"ser");
    for (var val of c){
      var i = this.SubServiceList.filter(s => s.id == val);
      console.log(i[0].cost);
      this.cost_s += i[0].cost;
    }
    this.total_Cost=this.cost_p+this.cost_s;
   
 
  }
   

  ngOnInit(): void {
    //console.log(Number(localStorage.getItem('ser_id')));
    this.ser_id = Number(localStorage.getItem('ser_id'));

    this._apiSubserv.getSubServicesById(this.ser_id).subscribe(
      //(res)=>console.log(res),
      (res) => this.SubServiceList = res,
      (err) => console.log(err)
    );


    this._apiTech.getTechnisionsByJob(this.ser_id).subscribe(
      //(data)=>console.log(data),
      (data) => this.TechnisionList = data,
      (err) => console.log(err)
    );
    // getTechnisionsByJob
    // console.log(this.TechnisionList.filter(tec=>tec.job=="None"));


    this._apiproduct.getAllProducts().subscribe(
      //(data)=>console.log(data),
      (data) => this.ProductList = data,
      (err) => console.log(err)
    );

    



    this._apiServ.getAllServices().subscribe(
      //(data)=>console.log(data),
      (data) => this.ServiceList = data,
      (err) => console.log(err)
    );

  }


  CreateOrder() {
    console.log(localStorage.getItem('token'));
    this.order = {

      date: this.order.date,
      description: "",
      total_cost: this.total_Cost,
      technical: Number(this.order.technical),
      service: Number(this.order.service),
      sub_services: this.order.sub_services,
      products: this.order.products,
    }

    // if (this.order.sub_services.length == 0){
    // }
    console.log(this.order);
    try{
      this._apiorder.insertOrder(this.order).subscribe(
        (data) => this._router.navigateByUrl('/NewOrder'),
        (err) => console.log(err)
      )
      this._router.navigateByUrl('');
      
    }
    catch (err)
    {
      console.log(err);
    }
   
  }


}
