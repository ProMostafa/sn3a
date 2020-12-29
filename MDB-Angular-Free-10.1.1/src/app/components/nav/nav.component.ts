import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  img1:string;

  constructor() { 
    this.img1="assets/sn3a_logo.png"

  }

  ngOnInit(): void {
  }

}
