import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { CategoryFormComponent } from './screens/admin/category/category-form/category-form.component';
import { CategoryManageComponent } from './screens/admin/category/category-manage/category-manage.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ListProductComponent } from './screens/product/list-product/list-product.component';
import { ProductDetailComponent } from './screens/product/product-detail/product-detail.component';

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
        path: "product",
        component: ListProductComponent,
      },
      {
        path: "product/:id",
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}