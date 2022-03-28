import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './screens/product/product.component';
import { HomeComponent } from './screens/home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ProductService } from './services/product/product.service'; 
import { HttpClientModule } from '@angular/common/http';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
