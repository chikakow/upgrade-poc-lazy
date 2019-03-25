import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, PreloadAllModules, RouterModule} from '@angular/router';
import { HeaderModule } from './header/header.module';

/**
 * This component implements the sibling outlets strategy.
 */
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div ui-view></div>
  `
})
export class AppComponent {}

@Component({
  template: `
    <div>
      <div>Angular Non-Lazy A!</div>
     <app-header></app-header>
    </div>
  `
})
export class AngularAComponent {
}


@NgModule({
  declarations: [
    AppComponent,
    AngularAComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
      {path: 'angular_a', component: AngularAComponent},
      {path: 'angular_b', loadChildren: './lazy-b/lazy-b.module#LazyBModule'},
      {path: 'angular_c', loadChildren: './lazy-c/lazy-c.module#LazyCModule'},
      {path: '', loadChildren: './angularjs/angularjs.module#AngularJSModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
