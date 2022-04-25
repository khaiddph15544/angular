import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  listUser: any
  page: number = 1
  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.us.get().subscribe(data => {
      this.listUser = data
    })
  }

  onDelete(id: number) {
    const confirm = window.confirm("Bạn có muốn xóa không?");
    if(confirm){
      this.us.delete(id).subscribe(() => {
        this.getUser()
      })
    }
  }
  changeStatus(event: number, product: any) {
    this.us.getOne(product.id).subscribe(data => {
      const newProduct = { ...data, status: event }
      this.us.update(newProduct).subscribe((data) => {
        this.getUser()
      })
    })
  }

}
