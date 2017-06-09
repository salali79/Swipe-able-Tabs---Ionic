import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeTabsPage } from './swipe-tabs';

@NgModule({
  declarations: [
    SwipeTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipeTabsPage),
  ],
  exports: [
    SwipeTabsPage
  ]
})
export class SwipeTabsPageModule {}
