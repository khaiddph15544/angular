import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup
  listCate: any
  action: String = "Thêm mới"
  constructor(
    private cate: CategoryService,
    private activeRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      id: new FormControl(""),
      productName: new FormControl(""),
      price: new FormControl(null),
      discount: new FormControl(null),
      desc: new FormControl(""),
      categoryId: new FormControl(null)
    })

    const id = this.activeRoute.snapshot.params['id']
    console.log(id)
  }

  ngOnInit(): void {
    this.cate.get().subscribe(data => {
      this.listCate = data
    })
  }

  onSubmit(data: any){
    console.log(data)
  }

}
