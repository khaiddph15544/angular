import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() text = ""
  @Output() btnSubmit: EventEmitter<any> = new EventEmitter()
  constructor() {
    
  }
  ngOnInit(): void {
  }
  onSubmit(value:number){
    this.btnSubmit.emit(value)
  }
}
