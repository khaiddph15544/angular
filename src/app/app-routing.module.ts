import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { CategoryFormComponent } from './pages/admin/category/category-form/category-form.component';
import { CategoryManageComponent } from './pages/admin/category/category-manage/category-manage.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductFormComponent } from './pages/admin/product/product-form/product-form.component';
import { ProductManageComponent } from './pages/admin/product/product-manage/product-manage.component';
import { UserFormComponent } from './pages/admin/user/user-form/user-form.component';
import { UserManageComponent } from './pages/admin/user/user-manage/user-manage.component';
import { HomeComponent } from './pages/client/home/home.component';
import { LoginComponent } from './pages/client/login/login.component';
import { ListProductComponent } from './pages/client/product/list-product/list-product.component';
import { ProductDetailComponent } from './pages/client/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "phones",
        component: ListProductComponent,
      },
      {
        path: "phones/:cateName",
        component: ListProductComponent
      },
      {
        path: "phones/:id/show",
        component: ProductDetailComponent
      }

    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'category',
        component: CategoryManageComponent,
      },
      {
        path: 'category/add',
        component: CategoryFormComponent,
      },
      {
        path: 'category/update/:id',
        component: CategoryFormComponent,
      },
      {
        path: 'product',
        component: ProductManageComponent,
      },
      {
        path: 'product/add',
        component: ProductFormComponent,
      },
      {
        path: 'product/update/:id',
        component: ProductFormComponent,
      },
      {
        path: 'user',
        component: UserManageComponent,
      },
      {
        path: 'user/add',
        component: UserFormComponent,
      },
      {
        path: 'user/update/:id',
        component: UserFormComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}