import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: [
    './home-layout.component.css',
    '../../app.component.css']
})
export class HomeLayoutComponent implements OnInit {

  listSearch: any
  constructor(private ps: ProductService) {
  }

  ngOnInit(): void {
    $(window.onload = () => {
      $(window).scroll(function () {
        if (scrollY > 25) {
          $(".header_bottom").addClass("sticky");
          $(".about-page").css('top', '590px')
        }
        else {
          $(".header_bottom").removeClass("sticky");
          $(".about-page").css('top', '640px')
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
  gotop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  searchVal =""
  onSearch(e: any) {
    $("#top_search").css('display', 'none')
    $(".list_search").css('display', 'block')
    this.searchVal = e.target.value;
    if(this.searchVal == ''){
      $("#top_search").css('display', 'block')
      $(".list_search").css('display', 'none')
    }
    this.ps.get().subscribe(data => {
      this.listSearch = data.filter((product: any) => {
        const usernameLowerCase = product.product_name.toLowerCase()
        const searchValLowerCase = this.searchVal.toLowerCase().trim()
        return usernameLowerCase.indexOf(searchValLowerCase) !== -1
      })
    })
  }
  formatCurrency(data: any) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(data)
  }
}
