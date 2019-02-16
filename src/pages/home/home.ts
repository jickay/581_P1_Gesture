import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private iconName = "cafe";

  constructor(public navCtrl: NavController) {

  }

  onSwipe(event) {
    console.log(event.direction);
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

    this.iconName = "heart";
    
  }

  onDownSwipe(e) {
    console.log("Down");

    this.iconName = "pizza";
  }

}
