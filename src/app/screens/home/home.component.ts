import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  aos_delay = "100";
  newProduct: Array<any> = [];
  sliderBestSeller: Array<any> = []
  listBestSeller: Array<any> = []
  hotSale: Array<any> = [];
  forMen: Array<any> = [];
  forWomen: Array<any> = [];
  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    AOS.init()
    this.ps.get().subscribe(data => {
      for (let i = data.length - 3; i < data.length; i++) {
        this.newProduct.push(data[i])
      }
      data.sort((a: any, b: any) => a.discount < b.discount ? 1 : (b.discount < a.discount ? -1 : 0))
      for (let i = 0; i < 10; i++) {
        this.hotSale.push(data[i])
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].model == 0) {
          this.forMen.push(data[i])
          if (this.forMen.length == 4) {
            break;
          }
        }
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i].model == 1) {
          this.forWomen.push(data[i])
          if (this.forWomen.length == 4) {
            break;
          }
        }
      }
    })
  }
  bestSellerSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    Infinity: true,
    prevArrow: "<i class='fa fa-angle-left' style='transition: 0.4s;opacity: 1;position: absolute;top: 40%;left: -1%;font-size: 35px;z-index: 3;cursor: pointer;padding: 10px;'></i>",
    nextArrow: "<i class='fa fa-angle-right'style='transition: 0.4s;opacity: 1;position: absolute;top: 40%;right: -1%;font-size: 35px;z-index: 3;cursor: pointer;padding: 10px;' ></i>",
  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    "autoplay": true,
    "autoplaySpeed": 2000,
    Infinity: true,
    prevArrow: "<i class='fa fa-angle-left' style='transition: 0.4s;opacity: 1;position: absolute;top: 40%;left: -1%;font-size: 35px;z-index: 3;cursor: pointer;padding: 10px;'></i>",
    nextArrow: "<i class='fa fa-angle-right'style='transition: 0.4s;opacity: 1;position: absolute;top: 40%;right: -1%;font-size: 35px;z-index: 3;cursor: pointer;padding: 10px;' ></i>",
  };
  formatCurrency(data: any) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(data)
  }
}
