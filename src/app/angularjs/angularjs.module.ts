import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { module } from './angularjsapp';

import 'angular';
declare const angular: any;

import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

import 'requirejs';
declare const requirejs: any;

/**
 * This module is written at the beginning of the upgrade process.
 * It does not need to change with the upgrade process.
 */

@Component({ template: `` })
export class EmptyComponent {}

@NgModule({
  declarations: [EmptyComponent],
  imports: [
    UpgradeModule,
    RouterModule.forChild([{ path: '**', component: EmptyComponent }])
  ]
})
export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(private upgrade: UpgradeModule) {
    // requirejs(['./assets/angularjsapp'], (app) => {
    //   console.log('js required is', app);
    //   console.log('js required is', angular.module('AngularJSApp')); // at this point, the module is created 
    //   // but the bloew bootstrap still blows up.
    //   this.upgrade.bootstrap(document.body, ['AngularJSApp']);
    // });

    // below module.name is super important for bootstrapping.
    // it has to be .ts file and import ed and used here for boostrap to succeed.
    upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(upgrade);
  }

  // below never gets fired for lazyloaded module.
  // ngDoBootstrap() {
  //   requirejs(['angular', 'angularJsApp'], (ng, app) => {
  //     setAngularJSGlobal(ng);
  //     this.upgrade.bootstrap(document.body, ['AngularJsAppModule']);
  //   });
  // }
}
