import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img1:string;

  constructor() { 
    this.img1="../../../assets/1.png"

  }

  ngOnInit(): void {
  }

}
