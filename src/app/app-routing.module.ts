import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ArchievementFormComponent } from './pages/admin/archievement/archievement-form/archievement-form.component';
import { ArchievementManageComponent } from './pages/admin/archievement/archievement-manage/archievement-manage/archievement-manage.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileFormComponent } from './pages/admin/profile/profile-form/profile-form.component';
import { ProfileManageComponent } from './pages/admin/profile/profile-manage/profile-manage.component';
import { ProjectFormComponent } from './pages/admin/project/project-form/project-form.component';
import { ProjectManageComponent } from './pages/admin/project/project-manage/project-manage.component';
import { SchoolFormComponent } from './pages/admin/school/school-form/school-form.component';
import { SchoolManageComponent } from './pages/admin/school/school-manage/school-manage.component';
import { SkillFormComponent } from './pages/admin/skill/skill-form/skill-form.component';
import { SkillManageComponent } from './pages/admin/skill/skill-manage/skill-manage.component';
import { HomeComponent } from './pages/client/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ]
  },
  {
    path: "admin",
    component: DashboardLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "profile",
        component: ProfileManageComponent
      },
      {
        path: "profile/update/:id",
        component: ProfileFormComponent
      },
      {
        path: "skill",
        component: SkillManageComponent
      },
      {
        path: "skill/add",
        component: SkillFormComponent
      },
      {
        path: "skill/update/:id",
        component: SkillFormComponent
      },
      {
        path: "project",
        component: ProjectManageComponent
      },
      {
        path: "project/add",
        component: ProjectFormComponent
      },
      {
        path: "project/update/:id",
        component: ProjectFormComponent
      },
      {
        path: "school",
        component: SchoolManageComponent
      },
      {
        path: "school/add",
        component: SchoolFormComponent
      },
      {
        path: "school/update/:id",
        component: SchoolFormComponent
      },{
        path: "archievement",
        component: ArchievementManageComponent
      },{
        path: "archievement/add",
        component: ArchievementFormComponent
      },{
        path: "archievement/update/:id",
        component: ArchievementFormComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}