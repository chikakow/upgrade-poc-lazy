import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCComponent } from './lazy-c.component';
import { RouterModule } from '@angular/router';
import {
  UpgradeModule,
  downgradeComponent,
  setAngularJSGlobal
} from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

import { module } from '../angularjs/angularjsapp';
import { FormsModule } from '@angular/forms';

import { AngularJSWrapperComponent } from './angularjs-wrapper.component';

// import * as rjs from 'requirejs';
import { HeaderModule } from '../header/header.module';
import * as angular from 'angular';

declare const requirejs: any;

// this is neccesary if you want to use AngularJs style input variable in Angular
// angular.module(module.name).directive('appRoot', downgradeComponent({component: AppComponent}));
angular
  .module(module.name)
  .directive('router-outlet', downgradeComponent({ component: LazyCComponent }));

@NgModule({
  declarations: [LazyCComponent, AngularJSWrapperComponent],
  imports: [
    HeaderModule,
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
  // constructor(private upgrade: UpgradeModule) {}

  // ngDoBootstrap() {
    // requirejs(['angular', 'angularJsApp'], (angular, app) => {
    // console.log(angular);
    // setAngularJSGlobal(angular);

    // setUpLocationSync(this.upgrade);
    // this.upgrade.bootstrap(document.body, [module.name]);
    // });
  // }

  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(upgrade);
  }
}
