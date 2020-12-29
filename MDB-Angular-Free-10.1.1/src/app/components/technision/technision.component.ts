import { Component, OnInit } from '@angular/core';
import { Itechnision } from '../../views/interface/itechnision';
import { TechnisionService } from '../../services/technision.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technision',
  templateUrl: './technision.component.html',
  styleUrls: ['./technision.component.scss']
})
export class TechnisionComponent implements OnInit {
 TechnisionList:Itechnision[];

  constructor(private _apiTech:TechnisionService,private _activatedRoute:ActivatedRoute) {
//     this.TechnisionList=[{img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"احمد فاروق"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"ياسر عبد المنعم"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"عمر محمود"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"محمد عثمان"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"ايوب مصطفى"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"فكرى محمد"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:" ايهاب مصطفى"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"رضا احمد"},
//     {img:"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",username:"شاكر محمد"}
// ];

this.TechnisionList=[{
  
  email: " ",
  username:" ",
  address: " ",
  phone:null,
  image:"",
  job:"",
  description:""

}]
   }

  ngOnInit(): void {
    this._apiTech.getTechnisions().subscribe(
      //(data)=>console.log(data),
      (data)=>this.TechnisionList=data,
      (err)=>console.log(err)
    )
  }

}


