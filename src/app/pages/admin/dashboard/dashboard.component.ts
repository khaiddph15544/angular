import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any
  countUser: number = 0
  countProduct: number = 0
  countCate: number = 0
  countComment: number = 0
  countOrder: number = 0 
  constructor(
    private us: UserService,
    private cate: CategoryService,
    private ps: ProductService,
    private cs: CommentService,
    private ods: OrderService
  ) { }

  ngOnInit(): void {
    this.us.get().subscribe(data => {
      this.users = data
      this.countUser = data.length
    })
    this.ps.get().subscribe(data => {
      this.countProduct = data.length
    })
    this.cate.get().subscribe(data => {
      this.countCate = data.length
    })
    this.cs.get().subscribe(data => {
      this.countComment = data.length
    })
    this.ods.get().subscribe(data => {
      this.countOrder = data.length
    })
  }
}
