import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {

  listProduct: any
  page: number = 1
  constructor(
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.ps.get().subscribe(data => {
      this.listProduct = data
    })
  }

  onDelete(id: number){

  }
  formatCurrency(data: number){
    return new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"}).format(Math.round(data))
  }
}
