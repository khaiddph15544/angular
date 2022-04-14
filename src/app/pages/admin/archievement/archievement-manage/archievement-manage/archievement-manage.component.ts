import { Component, OnInit } from '@angular/core';
import { ArchievementService } from 'src/app/services/archievement/archievement.service';

@Component({
  selector: 'app-archievement-manage',
  templateUrl: './archievement-manage.component.html',
  styleUrls: ['./archievement-manage.component.css']
})
export class ArchievementManageComponent implements OnInit {

  archievements: any
  constructor(
    private arch: ArchievementService
  ) { }

  ngOnInit(): void {
    this.getArch()
  }

  getArch(){
    this.arch.get().subscribe(data => {
      this.archievements = data
    })
  }
  onDelete(id: number) {
    const confirm = window.confirm("Bạn có muốn xóa không?")
    if (!confirm) return;
    this.arch.delete(id).subscribe((data) => {
      $("#row_" + id).css("display", "none")
    })
  }
  changeStatus(event: number, archool: any) {
    this.arch.getOne(archool.id).subscribe(data => {
      const newProduct = { ...data, status: event }
      this.arch.update(newProduct).subscribe((data) => {
        this.getArch()
      })
    })
  }
}
