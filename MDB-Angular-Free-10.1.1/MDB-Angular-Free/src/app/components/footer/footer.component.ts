import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img1:string;

  constructor() { 
    this.img1="assets/sn3a_logo.png"

  }

  ngOnInit(): void {
  }

}
