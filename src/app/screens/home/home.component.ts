import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import * as AOS from 'aos';
import { SliderService } from 'src/app/services/slider/slider.service';
import { CategoryService } from 'src/app/services/category/category.service';

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
  forMen: any;
  forWomen: any;
  hotSale: any;
  sliders: any;
  constructor(
    private ps: ProductService,
    private sls: SliderService,
  ) { }
  ngOnInit(): void {
    AOS.init()
    this.ps.get().subscribe(data => {
      for (let i = data.length - 3; i < data.length; i++) {
        this.newProduct.push(data[i])
      }
    })
    this.ps.getProductByGender(0, 4).subscribe(data => {
      this.forMen = data
    })
    this.ps.getProductByGender(1, 4).subscribe(data => {
      this.forWomen = data
    })
    this.ps.getProductSales(0, 10).subscribe(data => {
      this.hotSale = data
    })
    this.sls.get().subscribe(data => {
      this.sliders = data
    })
    window.onload = () => {
      let counter = 1;
      function plusSlides(n: number) {
        counter += n;
        slidefun(counter);
        resetsetTime();
      }
      function currentSlide(n: number) {
        counter = n;
        slidefun(counter);
        resetsetTime();
      }
      function resetsetTime() {
        clearInterval(setTime);
        setTime = setInterval(autoSlide, 4000);
      }

      let setTime = setInterval(autoSlide, 4000);
      function autoSlide() {
        counter += 1;
        slidefun(counter);
      }

      (<HTMLDivElement>document.querySelector(".fa-chevron-left")).onclick = () => {
        plusSlides(-1)
      }
      (<HTMLDivElement>document.querySelector(".fa-chevron-right")).onclick = () => {
        plusSlides(1)
      }
      (<HTMLDivElement>document.querySelector("#dot1")).onclick = () => {
        currentSlide(1)
      }
      (<HTMLDivElement>document.querySelector("#dot2")).onclick = () => {
        currentSlide(2)
      }
      (<HTMLDivElement>document.querySelector("#dot3")).onclick = () => {
        currentSlide(3)
      }

      let myslide = document.querySelectorAll('.main'),
        dot = document.querySelectorAll('.dot')
      slidefun(counter)
      function slidefun(n: number): any {
        console.log(myslide)

        let i;
        for (i = 0; i < myslide.length; i++) {
          myslide[i].className = 'main';
        }
        for (i = 0; i < dot.length; i++) {
          dot[i].className = 'dot';
        }
        if (n > myslide.length) {
          counter = 1;
        }
        if (n < 1) {
          counter = myslide.length;
        }
        myslide[counter - 1].className = 'active_main';
        dot[counter - 1].className += " dot_active";
      };
    }
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
