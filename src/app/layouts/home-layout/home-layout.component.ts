import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'
import { CartService } from 'src/app/services/cart/cart.service';
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
  listCart: any
  constructor(
    private ps: ProductService,
    private cate: CategoryService,
    private cart: CartService) {
  }

  ngOnInit(): void {
  
  }

  searchVal = ""
  onSearch(e: any) {
    console.log(typeof(e))
    $("#top_search").css('display', 'none')
    $(".list_search").css('display', 'block')
    if (typeof e != 'string') {
      this.searchVal = e.target.value;
    } else {
      this.searchVal = e
    }
    console.log(this.searchVal)
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
}
