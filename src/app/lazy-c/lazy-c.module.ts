import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCComponent } from './lazy-c.component';
import { RouterModule } from '@angular/router';
import { UpgradeModule, downgradeComponent, setAngularJSGlobal  } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

import { module } from '../angularjs/angularjsapp';
import { FormsModule } from '@angular/forms';

import { AngularJSWrapperComponent } from './angularjs-wrapper.component';

import * as rjs from 'requirejs';

//  declare const angular: any;

// this is neccesary if you want to use AngularJs style input variable in Angular
// angular.module(module.name).directive('appRoot', downgradeComponent({component: AppComponent}));

@NgModule({
  declarations: [LazyCComponent, AngularJSWrapperComponent],
  imports: [
    FormsModule,
    UpgradeModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'lazy-c', pathMatch: 'full' },
      { path: 'lazy-c', component: LazyCComponent }
    ])
  ],
  entryComponents: [LazyCComponent]
})
export class LazyCModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // rjs(['angular'], (angular) => {
     // setAngularJSGlobal(angular);
       setUpLocationSync(this.upgrade);
       this.upgrade.bootstrap(document.body, [module.name]);
   //  });
  }
}