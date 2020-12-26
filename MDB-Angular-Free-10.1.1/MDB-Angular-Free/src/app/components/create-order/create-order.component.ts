import { Component, OnInit , Input } from '@angular/core';
import { IsubService } from '../../views/interface/isub-service';
import { SubserviceService } from '../../../app/services/subservice.service';
import { ActivatedRoute } from '@angular/router';
import { Itechnision } from 'src/app/views/interface/itechnision';
import { TechnisionService } from 'src/app/services/technision.service';
import { Iproduct } from 'src/app/views/interface/iproduct';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
 
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  ProductList:Iproduct[];
  TechnisionList:Itechnision[];
  SubServiceList:IsubService[];

  

  constructor(private _activatedRoute:ActivatedRoute,private _apiSubserv:SubserviceService,
              private _apiTech:TechnisionService,private _apiproduct:ProductService) {
    this.SubServiceList=[{
      id:null,
      name: " ",
      description: " ",
      image:" ",
      cost:null,
      service:null

    }]
   }

  ngOnInit(): void {  
    
  let pid=this._activatedRoute.snapshot.params['id'];
  this._apiSubserv.getSubServicesById(1).subscribe(
    //(res)=>console.log(res),
    (res)=>this.SubServiceList=res,
    (err)=>console.log(err)

  );

  this._apiTech.getTechnisions().subscribe(
    //(data)=>console.log(data),
    (data)=>this.TechnisionList=data,
    (err)=>console.log(err)
  );

  this._apiproduct.getAllProducts().subscribe(
    //(data)=>console.log(data),
    (data)=>this.ProductList=data,
    (err)=>console.log(err)
  )
  }


  CreateOrder(){
    console.log("dddd");
  }

}
