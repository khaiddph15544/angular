import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup
  action: string = "Thêm mới"
  id: any
  constructor(
    private activeRoute: ActivatedRoute,
    private pjs: ProjectService,
    private route: Router
  ) {
    this.projectForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
      start_at: new FormControl("", Validators.required),
      end_at: new FormControl("", Validators.required),
      desc: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    })
    this.id = this.activeRoute.snapshot.params['id']
    if (this.id) {
      this.action = "Cập nhật"
      this.pjs.getOne(this.id).subscribe(data => {
        this.projectForm = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name, Validators.required),
          role: new FormControl(data.role, Validators.required),
          start_at: new FormControl(data.start_at, Validators.required),
          end_at: new FormControl(data.end_at, Validators.required),
          desc: new FormControl(data.desc, [
            Validators.required,
            Validators.minLength(6)
          ]),
        })
      })
    }
  }

  ngOnInit(): void {

  }
  onSubmit(data: any) {
    let newData = { ...data, status: 0 }
    if (newData.id == "") {
      this.pjs.insert(newData).subscribe(() => {
        alert("Thêm mới thành công!")
        this.route.navigate(["/admin/project"])
      })
    } else {
      this.pjs.getOne(this.id).subscribe(data => {
        newData = {...data, status: data.status}
        this.pjs.update(newData).subscribe(() => {
          alert("Cập nhật thành công!")
          this.route.navigate(["/admin/project"])
        })
      })
    }
  }

}
