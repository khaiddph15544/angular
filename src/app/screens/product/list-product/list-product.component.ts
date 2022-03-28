import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listCate: any
  listProduct: any
  listProductByView: any
  constructor(
    private cate: CategoryService,
    private ps: ProductService
    ) { }

  ngOnInit(): void {
    this.cate.get().subscribe(data => {
      this.listCate = data
    })
    this.ps.get().subscribe(data => {
      this.listProduct = data
    })
    this.ps.getProductByView().subscribe(data => {
      this.listProductByView = data
    })
  }
  formatCurrency(data: any) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(data)
  }
}
