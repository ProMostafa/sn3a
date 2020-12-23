import { Component, OnInit } from '@angular/core';
import { IsubService } from '../../views/interface/isub-service';
import { SubserviceService } from '../../../app/services/subservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.scss']
})
export class SubserviceComponent implements OnInit {
  SubServiceList:IsubService[];


  constructor(private _activatedRoute:ActivatedRoute,private _apiSubserv:SubserviceService) {
    this.SubServiceList=[{
      id:null,
      name: " ",
      description: " ",
      img:" ",
      cost:null,
      service:null

    }]


    // this.SubServiceList=[{id:1,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:2000,service:1},
    //                      {id:2,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:1000,service:1},
    //                      {id:3,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:1500,service:2},
    //                      {id:4,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:1000,service:2},
    //                      {id:5,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:2500,service:3},
    //                      {id:6,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:500,service:4},
    //                      {id:7,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:1000,service:5},
    //                      {id:8,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:3000,service:5},
    //                      {id:9,name:"النجارة و الاعمال الخشبية",description:"جميع اعمال  النحارة و الاثاث المنزلي",img:"assets/نجارة.jpg",cost:2000,service:6},


    // ]
   }

  ngOnInit(): void {
    let pid=this._activatedRoute.snapshot.params['id'];
    this._apiSubserv.getSubServicesById(pid).subscribe(
            
      (res)=>this.SubServiceList=res,
      (err)=>console.log(err)

    );
  }

}
