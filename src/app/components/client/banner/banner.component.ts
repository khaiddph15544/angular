import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
// @Directive({
//   selector: '[ngInit]'
// })
export class BannerComponent implements OnInit {

  sliders: any
  counter: number = 1
  setTime: any
  myslide: any
  dot: any
  constructor(
    private sls: SliderService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.slidefun(this.counter)
    this.activeRoute.params.subscribe((event: any) => {
      // this.router.navigate([""])
    })
  }

  ngOnInit(): void {
    this.sls.get().subscribe(data => {
      this.sliders = data
    })
    $(document).ready(() => {
      this.runSlider()
    })
  }

  runSlider() {
    window.onload = () => {
      this.myslide = document.querySelectorAll('.main')
      this.dot = document.querySelectorAll('.dot')
      this.slidefun(this.counter)
      this.setTime = window.setInterval(() => this.autoSlide(), 4000);
    }
  }

  plusSlides(n: number) {
    this.counter += n;
    this.slidefun(this.counter);
    this.resetsetTime();
  }
  currentSlide(n: number) {
    this.counter = n;
    this.slidefun(this.counter);
    this.resetsetTime();
  }
  autoSlide() {
    this.counter += 1;
    this.slidefun(this.counter);
  }

  resetsetTime() {
    clearInterval(this.setTime);
    this.setTime = setInterval(this.autoSlide, 4000);
  }

  slidefun(n: any) {
    let i;
    for (i = 0; i < this.myslide.length; i++) {
      this.myslide[i].className = 'main';
    }
    for (i = 0; i < this.dot.length; i++) {
      this.dot[i].className = 'dot';
    }
    if (n > this.myslide.length) {
      this.counter = 1;
    }
    if (n < 1) {
      this.counter = this.myslide.length;
    }
    this.myslide[this.counter - 1].className = 'active_main';
    this.dot[this.counter - 1].className += " dot_active";
  };
}
