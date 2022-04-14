import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {

  schoolForm: FormGroup
  action: string = "Thêm mới"
  id: any
  end_at: any
  currentDate: any
  constructor(
    private activeRoute: ActivatedRoute,
    private sch: SchoolService,
    private route: Router
  ) {
    this.schoolForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      major: new FormControl("", Validators.required),
      start_at: new FormControl("", Validators.required),
      end_at: new FormControl("", Validators.required),
    })
    this.id = this.activeRoute.snapshot.params['id']
    if (this.id && this.id != undefined) {
      this.action = "Cập nhật"
      this.sch.getOne(this.id).subscribe(data => {
        this.schoolForm = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name, Validators.required),
          major: new FormControl(data.major, Validators.required),
          start_at: new FormControl(data.start_at, Validators.required),
          end_at: new FormControl(data.end_at, Validators.required),
        })
      })
    }
  }

  ngOnInit(): void {

  }
  onSubmit(data: any) {
    data = { ...data, status: 0 }
    if (data.id == "") {
      this.sch.insert(data).subscribe(() => {
        alert("Thêm mới thành công!")
        this.route.navigate(["/admin/school"])
      })
    } else {
      this.sch.getOne(this.id).subscribe(data => {
        data = { ...data, status: data.status }
        this.sch.update(data).subscribe(() => {
          alert("Cập nhật thành công!")
          this.route.navigate(["/admin/school"])
        })
      })
    }
  }

}
