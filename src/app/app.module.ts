import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, PreloadAllModules, RouterModule} from '@angular/router';

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
    <div style="background-color: green">
      <div>Angular Non-Lazy A!</div>
      <div>Go to Angular A</div>
      <div><a routerLink="/angular_b">Go to Angular B</a></div>
      <div><a routerLink="/angular_c">Go to Angular C</a></div>
      <div><a routerLink="/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/angularjs_b">Go to AngularJS B</a></div>
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
