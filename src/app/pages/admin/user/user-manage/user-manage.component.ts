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
    this.us.get().subscribe(data => {
      this.listUser = data
    })
  }

  onDelete(id: Number){

  }

}
