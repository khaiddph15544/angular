import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup
  id: any
  oldImage: any
  previewUpload: any
  constructor(
    private activeRoute: ActivatedRoute,
    private ps: ProfileService,
    private router: Router
  ) {
    this.profileForm = new FormGroup({
      id: new FormControl(''),
      fullname: new FormControl(''),
      avatar: new FormControl(''),
      birthday: new FormControl(''),
      born: new FormControl(''),
      porfolio: new FormControl(''),
      applyFor: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      facebook: new FormControl(''),
      strength: new FormControl(''),
      target: new FormControl(''),
    })
    this.id = this.activeRoute.snapshot.params['id']
    this.ps.getOne(this.id).subscribe(data => {
      this.oldImage = data.avatar
      this.profileForm = new FormGroup({
        id: new FormControl(data.id),
        fullname: new FormControl(data.fullname, [
          Validators.required,
          Validators.minLength(6)
        ]),
        avatar: new FormControl(data.avatar),
        birthday: new FormControl(data.birthday, Validators.required),
        born: new FormControl(data.born, Validators.required),
        porfolio: new FormControl(data.porfolio, Validators.required),
        applyFor: new FormControl(data.applyFor, Validators.required),
        phoneNumber: new FormControl(data.phoneNumber, Validators.required),
        email: new FormControl(data.email, [
          Validators.required,
          Validators.email
        ]),
        facebook: new FormControl(data.facebook, Validators.required),
        strength: new FormControl(data.strength, Validators.required),
        target: new FormControl(data.target, Validators.required),
      })
    })
  }

  ngOnInit(): void {

  }
  onSubmit(profile: any) {
    this.ps.getOne(this.id).subscribe(data => {
      let image = this.previewUpload == undefined ? data.avatar : this.previewUpload
      profile = { ...profile, avatar: image }
      this.ps.update(profile).subscribe(data => {
        alert("Cập nhật thành công!")
        this.router.navigate(["/admin/profile"])
      })
    })
  }
  returnPage() {
    this.router.navigate(["/admin/profile"])
  }
  changeImage(event: any) {
    const endpoint = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      this.previewUpload = e.target?.result
    }
    reader.readAsDataURL(endpoint)
  }
}
