import { Component, OnInit } from '@angular/core';
import { Itechnision } from '../../views/interface/itechnision';
import { TechnisionService } from '../../services/technision.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Iservice } from 'src/app/views/interface/iservice';

@Component({
  selector: 'app-technision',
  templateUrl: './technision.component.html',
  styleUrls: ['./technision.component.scss']
})
export class TechnisionComponent implements OnInit {
 TechnisionList:Itechnision[];
 ServiceList: Iservice[];
 Service_name:Iservice[];
  constructor( private _apiServ: ServiceService , private _apiTech:TechnisionService,private _activatedRoute:ActivatedRoute) {

this.TechnisionList=[{
  
  email: " ",
  username:" ",
  address: " ",
  phone:null,
  avatar:" ",
  technical_job:null,
  description:"",
  

}],
this.ServiceList=[{
  id: null,
  type: " ",
  description: " ",
  image:" "
}
  ]

   }

  ngOnInit(): void {
    this._apiServ.getAllServices().subscribe(
      //(data)=>console.log(data),
      (data)=>this.ServiceList=data,
      (err)=>console.log(err)
    )
      ,
    this._apiTech.getTechnisions().subscribe(
      //(data)=>console.log(data),
      (data)=>this.getAllTechjob(data),
      (err)=>console.log(err)
    )
  

}
getAllServiceName(id:number):string{
  this.Service_name=this.ServiceList.filter(s => s.id == id)
    console.log(this.Service_name[0].type)
    return this.Service_name[0].type
}


getAllTechjob(techList:Itechnision[]) {
      
  //newOrderCustomer.description=" ssssss "
  //console.log(OrderCustomerList)
    for(var tech of techList){
      var newtech:Itechnision={
        email: "dd ",
        username:"dd",
        address: "dd ",
        phone:0,
        avatar:"bh ",
        technical_job:"gtg",
        description:"hh"
    };
    var techjob:string=this.getAllServiceName(tech.technical_job)
    newtech. email=tech. email;
    newtech.username=tech.username;
    newtech.address=tech.address;
    newtech.phone=tech.phone;
    newtech.avatar=tech.avatar;
    newtech.technical_job=techjob;
    newtech.description=tech.description;
    
    this.TechnisionList.push(newtech)
  
    }
   
}}