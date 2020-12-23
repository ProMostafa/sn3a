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
      description: " ",
      img:" ",
      cost:null,
      service:null

    }]
  }

  ngOnInit(): void {
    let pid=this._activatedRoute.snapshot.params['id'];
    this._apiSubProduct.getSubProductsById(pid).subscribe(
            
      (res)=>this.SubProductList=res,
      (err)=>console.log(err)

    );
  }

}



  

