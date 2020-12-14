import { Component, OnInit } from '@angular/core';
import { IsubService } from '../../views/interface/isub-service';
import { SubserviceService } from '../../../app/services/subservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {
  service:IsubService[];
  constructor(private _activatedRoute:ActivatedRoute,private _apiSubserv:SubserviceService) { }
  ngOnInit(): void {
    let pid=this._activatedRoute.snapshot.params['id'];
    this._apiSubserv.getServiceById(pid).subscribe(
      (res)=>this.service=res,
      (err)=>console.log(err)

    );
  }


}
