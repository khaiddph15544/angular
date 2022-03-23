import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.slidefun(this.counter)
  }
  myslide = document.querySelectorAll('.main')

  counter = 1;
  autoSlide = () => {
    this.counter++;
    this.slidefun(this.counter);
  }
  timer = setInterval(this.autoSlide, 6000);

  dot = document.querySelectorAll('.dot')
  plusSlides = (n: any): void => {
    this.counter += n;
    this.slidefun(this.counter);
    this.resetTimer();
  }
  currentSlide = (n: any) => {
    this.counter = n;
    this.slidefun(this.counter);
    this.resetTimer();
  }
  // this.slidefun(this.counter);
  slidefun = (n: any): void => {
    let i;
    for (i = 0; i < this.myslide.length; i++) {
      this.myslide[i].className = 'main';
      console.log(this.myslide)
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
    // this.myslide[this.counter - 1].className = 'active_main';
    // this.dot[this.counter - 1].className += " dot_active";
    // console.log(this.myslide)
  }

  resetTimer = () => {
    clearInterval(this.timer);
    this.timer = setInterval(this.autoSlide, 6000);
  }
}
