import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill-manage',
  templateUrl: './skill-manage.component.html',
  styleUrls: ['./skill-manage.component.css']
})
export class SkillManageComponent implements OnInit {

  skills: any
  page: number = 1
  constructor(
    private sk: SkillService
  ) { }

  ngOnInit(): void {
    this.getSkill()
  }
  getSkill(){
    this.sk.get().subscribe(data => {
      this.skills = data
    })
  }
  onDelete(id: number){
    const confirm = window.confirm('Bạn có muốn xóa không?')
    if(!confirm) return;
    this.sk.delete(id).subscribe(data => {
      $("#row_"+id).css("display", "none")
    })
  }
  changeStatus(event: number, skool: any) {
    this.sk.getOne(skool.id).subscribe(data => {
      const newProduct = { ...data, status: event }
      this.sk.update(newProduct).subscribe((data) => {
        this.getSkill()
      })
    })
  }
}
