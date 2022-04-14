import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrls: ['./project-manage.component.css']
})
export class ProjectManageComponent implements OnInit {

  projects: any
  constructor(
    private prs: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProject()
  }
  getProject(){
    this.prs.get().subscribe(data => {
      this.projects = data
    })
  }
  
  onDelete(id: number){
    this.prs.delete(id).subscribe(data => {
      $("#row_"+id).css('display', 'none')
    })
  }
  changeStatus(event: number, prsool: any) {
    this.prs.getOne(prsool.id).subscribe(data => {
      const newProduct = { ...data, status: event }
      this.prs.update(newProduct).subscribe((data) => {
        this.getProject()
      })
    })
  }
}
