import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  skillForm: FormGroup
  action: string = "Thêm mới"
  previewUpload: any
  oldImage: any
  id: any
  constructor(
    private activeRoute: ActivatedRoute,
    private sch: SkillService,
    private route: Router
  ) {
    this.skillForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      point: new FormControl("", [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      image: new FormControl("")
    })
    this.id = this.activeRoute.snapshot.params['id']
    if (this.id) {
      this.action = "Cập nhật"
      this.sch.getOne(this.id).subscribe(data => {
        this.oldImage = data.image
        this.skillForm = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name, Validators.required),
          point: new FormControl(data.point, [
            Validators.required,
            Validators.pattern('^[0-9]+$')
          ]),
          image: new FormControl(data.image)
        })
      })
    }
  }

  ngOnInit(): void {

  }
  onSubmit(data: any) {
    let image = data.image
    if (this.previewUpload) {
      image = this.previewUpload
      data = { ...data, status: 0, image }
    }
    if (data.id == "") {
      this.sch.insert(data).subscribe(() => {
        alert("Thêm mới thành công!")
        this.route.navigate(["/admin/skill"])
      })
    } else {
      this.sch.getOne(this.id).subscribe(data => {
        data = { ...data, status: data.status, image }
        this.sch.update(data).subscribe(() => {
          alert("Cập nhật thành công!")
          this.route.navigate(["/admin/skill"])
        })
      })
    }
  
  }
  returnPage() {
    this.route.navigate(["/admin/skill"])
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
