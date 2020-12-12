import { Component, OnInit } from '@angular/core';
import { Iservice } from '/home/hossam/front_end/front/san3ie/src/app/views/interface/iservice';
import { ServiceService } from '/home/hossam/front_end/front/san3ie/src/app/services/service.service';

@Component({
  selector: 'app-servises',
  templateUrl: './servises.component.html',
  styleUrls: ['./servises.component.css']
})
export class ServisesComponent implements OnInit {
  ServiceList:Iservice[];
  constructor(private _apiServ:ServiceService) { }
  
  ngOnInit(): void {
    this._apiServ.getAllServices().subscribe(
      (data)=>this.ServiceList=data,
      (err)=>console.log(err)
    )
  }


}

