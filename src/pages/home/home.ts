import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

let translateStart = 0;
let translateSize = 600;
let t1 = (translateStart).toString() + "px";
let t2 = -(translateSize*1).toString() + "px";
let t3 = -(translateSize*2).toString() + "px";
let t4 = -(translateSize*3).toString() + "px";
let t5 = -(translateSize*4).toString() + "px";
let t6 = -(translateSize*5).toString() + "px";
let t7 = -(translateSize*6).toString() + "px";
let t8 = -(translateSize*7).toString() + "px";

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
      state('5', style({
        transform: `translateY(${t5})`
      })),
      state('6', style({
        transform: `translateY(${t6})`
      })),
      state('7', style({
        transform: `translateY(${t7})`
      })),
      state('8', style({
        transform: `translateY(${t8})`
      })),
      transition('* => *', animate('.25s'))
    ]),
    trigger('unlock', [
      state('1', style({
        transform: 'rotate(1080deg) scale(10.0)',
      })),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class HomePage {

  private delay = 10;
  private scrollStateInt = 1;
  private scrollState = this.scrollStateInt.toString();

  private unlockState = '0';
  
  private colourArr: string[] = ["#6ba3ff","#70ffdb","#5bff81","#ffe228","#f49929","#fc6767","#ff87e9","#9e51f7"];
  private colourIndex = 0;

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

    if(this.colourIndex == this.colourArr.length-1) {
      this.colourIndex = 0
    } else {
      this.colourIndex++;     
    }
    console.log("color index: " + this.colourIndex);
    document.getElementById("bkgd").style.backgroundColor = this.colourArr[this.colourIndex];

    this.checkUnlock();
  }

  onRightSwipe(e) {
    console.log("Right");

    if(this.colourIndex == 0) {
      this.colourIndex = this.colourArr.length-1
    } else {
      this.colourIndex--;     
    }
    console.log("color index: " + this.colourIndex);

    document.getElementById("bkgd").style.backgroundColor = this.colourArr[this.colourIndex];

    this.checkUnlock();
  }

  onUpSwipe(e) {
    console.log("Up");

    if (this.scrollStateInt < 8) {
      this.scrollStateInt++;
      this.scrollState = this.scrollStateInt.toString();
      console.log(this.scrollStateInt);
    }

    this.checkUnlock();
  }

  onDownSwipe(e) {
    console.log("Down");

    if (this.scrollStateInt > 1) {
      this.scrollStateInt--;
      this.scrollState = this.scrollStateInt.toString();
      console.log(this.scrollStateInt);
    }

    this.checkUnlock();
  }

  checkUnlock() {
    let targetIcon = 4;
    let targetColor = 4;

    setTimeout(() => {
      if (this.scrollStateInt == targetIcon && this.colourIndex+1 == targetColor) {
        console.log("unlock triggered!");
        this.unlockState = '1';
      }
    }, 500)

    
  }
}
