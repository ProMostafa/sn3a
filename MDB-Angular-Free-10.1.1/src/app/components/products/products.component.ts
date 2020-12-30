import { Component, OnInit } from '@angular/core';
import { Iproduct} from '../../views/interface/iproduct';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 ProductList:Iproduct[];

  constructor(private _apiproduct:ProductService) {
    this.ProductList=[{
      id: null,
      type: " ",
      description: " ",
      image:" "
    }
      ]
   }

  ngOnInit(): void {
    this._apiproduct.getAllProducts().subscribe(
      //(data)=>console.log(data),
      (data)=>this.ProductList=data,
      (err)=>console.log(err)
    )
  }

}
