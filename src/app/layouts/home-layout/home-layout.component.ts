import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: [
    './home-layout.component.css',
    '../../app.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(window.onload = () => {
      $(window).scroll(function () {
        if (scrollY > 25) {
          $(".header_bottom").addClass("sticky");
        }
        else {
          $(".header_bottom").removeClass("sticky");
        }
        if (scrollY >= 50) {
          $(".gototop").addClass("btn_gototop");
        }
        else {
          $(".gototop").removeClass("btn_gototop");
        }
      });
    })
  } 
  gotop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
