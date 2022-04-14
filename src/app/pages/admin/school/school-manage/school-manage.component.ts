import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-school-manage',
  templateUrl: './school-manage.component.html',
  styleUrls: ['./school-manage.component.css']
})
export class SchoolManageComponent implements OnInit {

  schools: any
  constructor(
    private sch: SchoolService
  ) { }

  ngOnInit(): void {
    this.getSchool()
  }

  getSchool(){
    this.sch.get().subscribe(data => {
      this.schools = data
    })
  }
  onDelete(id: number) {
    const confirm = window.confirm("Bạn có muốn xóa không?")
    if (!confirm) return;
    this.sch.delete(id).subscribe((data) => {
      $("#row_" + id).css("display", "none")
    })
  }
  changeStatus(event: number, school: any) {
    this.sch.getOne(school.id).subscribe(data => {
      const newProduct = { ...data, status: event }
      this.sch.update(newProduct).subscribe((data) => {
        this.getSchool()
      })
    })
  }
}
