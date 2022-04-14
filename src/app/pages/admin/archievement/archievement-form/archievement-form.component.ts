import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchievementService } from 'src/app/services/archievement/archievement.service';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-archievement-form',
  templateUrl: './archievement-form.component.html',
  styleUrls: ['./archievement-form.component.css']
})
export class ArchievementFormComponent implements OnInit {

  archieveForm: FormGroup
  action: string = "Thêm mới"
  schools: any
  schoolId: number = 1
  id: any
  constructor(
    private activeRoute: ActivatedRoute,
    private arch: ArchievementService,
    private sch: SchoolService,
    private route: Router
  ) {
    this.archieveForm = new FormGroup({
      id: new FormControl(""),
      schoolId: new FormControl(this.schoolId, Validators.required),
      name: new FormControl("", Validators.required),
      start_at: new FormControl("", Validators.required),
      end_at: new FormControl("", Validators.required),
      desc: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
    this.id = this.activeRoute.snapshot.params['id']
    if (this.id) {
      this.action = "Cập nhật"
      this.arch.getOne(this.id).subscribe(data => {
        this.archieveForm = new FormGroup({
          id: new FormControl(data.id),
          schoolId: new FormControl(data.schoolId, Validators.required),
          name: new FormControl(data.name, Validators.required),
          start_at: new FormControl(data.start_at, Validators.required),
          end_at: new FormControl(data.end_at, Validators.required),
          desc: new FormControl(data.desc, Validators.required),
        })
      })
    }
  }

  ngOnInit(): void {
    this.sch.get().subscribe(data => {
      this.schools = data
    })
  }
  onSubmit(data: any) {
    data = {...data, status: 0}
    if (data.id == "") {
      this.arch.insert(data).subscribe(() => {
        alert("Thêm mới thành công!")
        this.route.navigate(["/admin/archievement"])
      })
    } else {
      this.arch.getOne(this.id).subscribe(data => {
        data = {...data, status: data.status}
        this.arch.update(data).subscribe(() => {
          alert("Cập nhật thành công!")
          this.route.navigate(["/admin/archievement"])
        })
      })
    }
  }

}
