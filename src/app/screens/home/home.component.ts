import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  monhoc: any = [
    {
      id: 1,
      name: "Sản phẩm 1"
    },
    {
      id: 2,
      name: "Sản phẩm 2"
    },
    {
      id: 3,
      name: "Sản phẩm 3"
    }
  ]

}
