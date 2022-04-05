import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  productDetail: any
  constructor(
    private ps: ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id']
    this.ps.getOne(id).subscribe(data => {
      this.productDetail = data
    })
  }

}
