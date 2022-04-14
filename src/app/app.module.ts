import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatTableModule  } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ArchievementManageComponent } from './pages/admin/archievement/archievement-manage/archievement-manage/archievement-manage.component';
import { ProjectManageComponent } from './pages/admin/project/project-manage/project-manage.component';
import { ProfileManageComponent } from './pages/admin/profile/profile-manage/profile-manage.component';
import { ProjectFormComponent } from './pages/admin/project/project-form/project-form.component';
import { SkillManageComponent } from './pages/admin/skill/skill-manage/skill-manage.component';
import { SkillFormComponent } from './pages/admin/skill/skill-form/skill-form.component';
import { ProfileFormComponent } from './pages/admin/profile/profile-form/profile-form.component';
import { SchoolManageComponent } from './pages/admin/school/school-manage/school-manage.component';
import { SchoolFormComponent } from './pages/admin/school/school-form/school-form.component';
import { BtnStatusComponent } from './components/btn-status/btn-status.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArchievementFormComponent } from './pages/admin/archievement/archievement-form/archievement-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    SkillManageComponent,
    SkillFormComponent,
    ProjectManageComponent,
    ProfileFormComponent,
    SchoolManageComponent,
    SchoolFormComponent,
    ArchievementManageComponent,
    ArchievementFormComponent,
    ProjectManageComponent,
    ProjectFormComponent,
    ProfileManageComponent,
    BtnStatusComponent,
    ShowValidateComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    NgxPaginationModule
  ],
  providers: [
    ProfileFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
