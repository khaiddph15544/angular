import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  textUU: string
  constructor() {
    this.textUU = "bai test"
  }
  ngOnInit(): void {
    
  }
  onSubmit(event:number){
    console.log(event)
  }
}
