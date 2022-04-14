import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { SchoolService } from 'src/app/services/school/school.service';
import { SkillService } from 'src/app/services/skill/skill.service';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  profile: any
  skills: Array<any> = []
  projects: Array<any> = []
  schools: Array<any> = []
  constructor(
    private ps: ProfileService,
    private sk: SkillService,
    private prs: ProjectService,
    private sch: SchoolService
  ) {
    $(window.onscroll = () => {
      if (scrollY > 850) {
        $(".bar").each(function () {
          $(this).find(".bar-inner").animate({
            width: $(this).attr("id")
          }, 2000)
        });
      }
    })
  }

  ngOnInit(): void {
    this.ps.get().subscribe(data => {
      this.profile = data[0]
    })
    this.sk.get().subscribe(data => {
      data.forEach((e: any) => {
        if(e.status == 1){
          this.skills.push(e)
        }
      })
    })
    this.prs.get().subscribe(data => {
      data.forEach((e: any) => {
        if(e.status == 1){
          this.projects.push(e)
        }
      })
    })
    this.sch.get().subscribe(data => {
      data.forEach((e: any) => {
        if(e.status == 1){
          this.schools.push(e)
        }
      })
    })
  }
  directToFacebook() {
    window.location.href = "https://www.facebook.com/Khaidang121002/"
  }
  redirectToPorfolio(){
    window.location.href = "https://porfolio-beta-one.vercel.app/"
  }
}
