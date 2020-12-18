import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../views/iservice';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ServiceList:Iservice[];
  constructor(private _apiServ:ServiceService) { }
  

  ngOnInit(): void {
    this._apiServ.getAllServices().subscribe(
      //(data)=>console.log(data),
      (data)=>this.ServiceList=data,
      (err)=>console.log(err)
    )
  }

}


