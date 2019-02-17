import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

let translateStart = 0;
let translateSize = 600;
let t1 = (translateStart).toString() + "px";
let t2 = -(translateSize*1).toString() + "px";
let t3 = -(translateSize*2).toString() + "px";
let t4 = -(translateSize*3).toString() + "px";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('scrollY', [
      state('1', style({
        transform: `translateY(${t1})`
      })),
      state('2', style({
        transform: `translateY(${t2})`
      })),
      state('3', style({
        transform: `translateY(${t3})`
      })),
      state('4', style({
        transform: `translateY(${t4})`
      })),
      transition('* => *', animate('.3s'))
    ])
  ]
})
export class HomePage {

  private delay = 10;
  private scrollStateInt = 1;
  private scrollState = this.scrollStateInt.toString();
  private scrollUpStateBottom = 'start';

  private iconName = "cafe";
  private iconTopInt = 350;
  private iconTop = this.iconTopInt.toString() + "px";
  private iconBottomTopInt = 1000;
  private iconBottomTop = this.iconBottomTopInt.toString() + "px";

  constructor(public navCtrl: NavController) {

  }

  onSwipe(event) {
    // console.log(event.direction);
    let direction = event.direction;
    switch (direction) {
      case 2: this.onLeftSwipe(event); break;
      case 4: this.onRightSwipe(event); break;
      case 8: this.onUpSwipe(event); break;
      case 16: this.onDownSwipe(event); break;
    }
  }

  onLeftSwipe(e) {
    console.log("Left");
    if (e.target.id == "bkgd") {
      e.target.style.backgroundColor = "red";
    }
  }

  onRightSwipe(e) {
    console.log("Right");

    if (e.target.id == "bkgd") {
      e.target.style.backgroundColor = "yellow";
    }
  }

  onUpSwipe(e) {
    console.log("Up");
    let icon = document.querySelector(".icon-container");
    let iconBottom = document.querySelector(".icon-container-bottom");

    if (this.scrollStateInt < 4) {
      this.scrollStateInt++;
      this.scrollState = this.scrollStateInt.toString();
      console.log(this.scrollStateInt);
    }
  }

  onDownSwipe(e) {
    console.log("Down");
    if (this.scrollStateInt > 1) {
      this.scrollStateInt--;
      this.scrollState = this.scrollStateInt.toString();
      console.log(this.scrollStateInt);
    }
    // this.scrollUpState = 'down';
    // this.scrollUpStateBottom = 'down';

    // this.iconName = "pizza";
  }


}
