import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css']
})
export class CategoryManageComponent implements OnInit {

  listCate: any
  page: number = 1
  constructor(
    private cate: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cate.get().subscribe(data => {
      this.listCate = data
    })
  }

  onDelete(id: Number) {
    const confirm = window.confirm('Bạn có muốn xóa không?')
    if (confirm) {
      this.cate.delete(id).subscribe(data => {
        $("#row_" + id).css('display', 'none')
      })
    }
  }

  changeStatus(event: any, data: any){
    console.log(event)
  }
}
