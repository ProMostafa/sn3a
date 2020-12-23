import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../views/interface/iservice';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ServiceList:Iservice[];


  constructor(private _apiServ:ServiceService) { 
    this.ServiceList=[{
    id: null,
    type: " ",
    description: " ",
    img:" "
  }
    ]

    // this.ServiceList=[{id:1,type:"النجارة",description:"أعمال النجارة والأعمال الخشبية للأثاث المنزلي",img:"assets/نجارة.jpg"},
    //                   {id:2,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:3,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:4,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:5,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:6,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:7,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},
    //                   {id:8,type:"النجارة",description:"خدمات النجارة",img:"assets/نجارة.jpg"},

    // ];

  }
  

  ngOnInit(): void {

    this._apiServ.getAllServices().subscribe(
      //(data)=>console.log(data),
      (data)=>this.ServiceList=data,
      (err)=>console.log(err)
    )
  }

}


