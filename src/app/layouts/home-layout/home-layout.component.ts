import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'
import { CategoryService } from 'src/app/services/category/category.service';
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
  listCate: any;
  constructor(
    private ps: ProductService,
    private cate: CategoryService) {
  }

  ngOnInit(): void {
    this.cate.get().subscribe(data => {
      this.listCate = data
    })
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

      $("#top_search li span").click((e) => {
        $("#input_search").val(e.target.innerHTML)
        this.onSearch(e.target.innerHTML)
      })
    })
  }
  gotop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  searchVal = ""
  onSearch(e: any) {
    $("#top_search").css('display', 'none')
    $(".list_search").css('display', 'block')
    if (typeof e != 'string') {
      this.searchVal = e.target.value;
    } else {
      this.searchVal = e
    }
    if (this.searchVal == '') {
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
