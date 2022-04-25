import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(
    private us: UserService,
    private router: Router,
    private authService: SocialAuthService
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      user_name: new FormControl("", [
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  ngOnInit(): void {
  }

  onSubmit(data: any) {
    if (data.repassword != data.password) {
      alert("Nhập lại mật khẩu không khớp")
    } else {
      data.repassword = undefined
      data = { ...data, image: "", gender: 0, age: 0, role: 0, status: 1 }
      this.us.signup(data).subscribe(() => {
        alert("Đăng kí tài khoản thành công!")
        this.router.navigate(["/login"])
      }, error => alert(error.error))
    }
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      localStorage.setItem("accountSignin", JSON.stringify(data))
      this.router.navigate([""]).then(() => {
        window.location.reload()
      })
    })
  }
}
