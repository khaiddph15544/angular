import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup
  listCate: any
  action: String = "Thêm mới"
  previewUpload: any
  image: any
  selectUndefinedOptionValue: any
  oldImage: string = ""
  categotyId: number = 1
  id: any
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private toastr: ToastrService
  ) {
    this.userForm = new FormGroup({
      id: new FormControl(""),
      email: new FormControl("", Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      image: new FormControl(""),
      user_name: new FormControl(null, Validators.required),
      gender: new FormControl(0, Validators.required),
      age: new FormControl(0, Validators.required),
      role: new FormControl(0, Validators.required)
    })

    this.id = this.activeRoute.snapshot.params['id']
    if (this.id != undefined) {
      this.action = "Cập nhật"
      this.us.getOne(this.id).subscribe(res => {
        this.oldImage = res.image
        this.userForm = new FormGroup({
          id: new FormControl(""),
          email: new FormControl(res.email, Validators.required),
          image: new FormControl(""),
          user_name: new FormControl(res.user_name, Validators.required),
          gender: new FormControl(res.gender, Validators.required),
          age: new FormControl(res.age, Validators.required),
          role: new FormControl(res.role, Validators.required)
        })
      })
    }
  }

  ngOnInit(): void {

  }

  onSubmit(newUser: any) {
    let image = newUser.image
    if (this.previewUpload) {
      image = this.previewUpload
    }
    newUser = { ...newUser, image: image, status: 0 }
    if (newUser.id == "") {
      this.us.signup(newUser).subscribe(() => {
        alert("Thêm mới thành công!")
        this.router.navigate(["/admin/user"])
      }, error => alert(error.error))
    } else {
      this.us.getOne(this.id).subscribe((data) => {
        image = !this.previewUpload ? data.image : this.previewUpload
        newUser = { ...newUser, status: data.status }
        this.us.update(newUser).subscribe(() => {
          alert("Cập nhật thành công!")
          this.router.navigate(["/admin/user"])
        })
      })
    }
  }
  returnPage() {
    this.router.navigate(["/admin/user"])
  }
  imageChange(event: any) {
    const endpoint = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      this.previewUpload = e.target?.result
    }
    reader.readAsDataURL(endpoint)
  }

}
