import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressService } from "../../providers/wordpress-service"
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [WordpressService]
})

export class AboutPage {
  items: any;
  public wordpress: any;
  message: string = 'Ice cream. Its good and u want it';

  constructor(public wordpressService: WordpressService, public navCtrl: NavController) {
    //this.loadWordpress();
  }

  public getIceCream() {
    if (!this.wordpressService.hadIceCream) {
      this.message = this.wordpressService.getIceCream();
    } else {
      this.message = 'stop hogging all the ice cream';
    }
  }
  /* loadWordpress(){
  this.wordpressService.load()
  .then(data1 => {
    this.wordpress = data1;
  });
} */

}

