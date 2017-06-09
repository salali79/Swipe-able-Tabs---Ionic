import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the SwipeTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
})

export class SwipeTabsPage {

  @ViewChild('pageSlider') pageSlider: Slides;

  tabs: any = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }

  selectTab(index) {
    this.pageSlider.slideTo(index);
  }



}
