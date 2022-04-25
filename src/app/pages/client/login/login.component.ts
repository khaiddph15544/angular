import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  loggedIn: any;
  formLogin: FormGroup
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private us: UserService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      localStorage.setItem("accountSignin", JSON.stringify(data))
      this.router.navigate([""]).then(() => {
        window.location.reload()
      })
    })
  }

  onSubmit(data: any){
    this.us.signin(data).subscribe(res => {
      localStorage.setItem("accountSignin", JSON.stringify(res.user))
      alert("Đăng nhập thành công!")
      this.router.navigate([""]).then(() => {
        window.location.reload()
      })
    }, error => alert(error.error))
  }

}
