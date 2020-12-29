import { Component, OnInit } from '@angular/core';
import { Isubproduct} from '../../views/interface/isubproduct';
import { SubproductService } from '../../services/subproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subproducts',
  templateUrl: './subproducts.component.html',
  styleUrls: ['./subproducts.component.scss']
})
export class SubproductsComponent implements OnInit {
  SubProductList:Isubproduct[];
  constructor(private _activatedRoute:ActivatedRoute,private _apiSubProduct:SubproductService) { 
    this.SubProductList=[{
      id:null,
      name: " ",
      image:" ",
      cost:null,
      category:null

    }]
  }

  ngOnInit(): void {
    
    this._apiSubProduct.getAllProducts().subscribe(
      //(data)=>console.log(data),
      (data)=>this.SubProductList=data,
      (err)=>console.log(err)
    )
  }

}



  

