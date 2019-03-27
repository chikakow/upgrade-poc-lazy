import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { module } from './angularjs2app';

import 'angular';
declare const angular: any;

import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';
import { LazyCComponent } from './lazy-c.component';
import { HeaderModule } from '../header/header.module';
import 'requirejs';
declare const requirejs: any;
/**
 * This module is written at the beginning of the upgrade process.
 * It does not need to change with the upgrade process.
 */

// @Component({template: ``})
// export class EmptyComponent {}

@NgModule({
  declarations: [LazyCComponent],
  imports: [
    HeaderModule,
    UpgradeModule,
    RouterModule.forChild([{ path: '**', component: LazyCComponent }])
  ]
})
export class LazyCModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(private upgrade: UpgradeModule) {
    // console.log('upgrade c', upgrade);
    // upgrade.bootstrap(document.body, [module.name]);
    // setUpLocationSync(upgrade);
  }

  ngDoBootstrap() {
    requirejs(['angular', 'angularJsApp'], (ng, app) => {
      setAngularJSGlobal(ng);
      this.upgrade.bootstrap(document.body, ['AngularJsAppModule']);
    });
  }
}
