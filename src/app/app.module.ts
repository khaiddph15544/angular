import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ProductService } from './services/product/product.service'; 
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoryService } from './services/category/category.service';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatTableModule  } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductManageComponent } from './pages/admin/product-manage/product-manage.component';
import { CategoryFormComponent } from './pages/admin/category/category-form/category-form.component'
import { CategoryManageComponent } from './pages/admin/category/category-manage/category-manage.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLayoutComponent,
    ListProductComponent,
    ProductDetailComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    CategoryManageComponent,
    ProductManageComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
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
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
