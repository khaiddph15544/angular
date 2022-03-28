import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: any
  status: any
  model: any
  brand: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id']
    this.ps.getOne(id).subscribe(data => {
      this.productDetail = data
      this.status = this.productDetail.quantity > 0 ? 'Còn hàng' : 'Hết hàng'
      this.model = this.productDetail.model == 0 ? 'Nam' : 'Nữ'
    })
  }
  formatCurrency(data: any) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(data)
  }
}
