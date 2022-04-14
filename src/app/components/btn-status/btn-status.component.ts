import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-status',
  templateUrl: './btn-status.component.html',
  styleUrls: ['./btn-status.component.css']
})
export class BtnStatusComponent implements OnInit {

  @Input() status: number
  @Output() changeStatus: EventEmitter<number>
  constructor() {
    this.status = 0
    this.changeStatus = new EventEmitter()
  }

  ngOnInit(): void {
  }
  onChangeStatus(status: number) {
    this.changeStatus.emit(status)
  }

}
