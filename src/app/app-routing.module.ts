import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './layouts/banner/banner/banner.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ProductComponent } from './screens/product/product.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        children: [
          {
            path: "",
            component: BannerComponent
          }
        ]
      },
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "detail",
        component: ProductComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}