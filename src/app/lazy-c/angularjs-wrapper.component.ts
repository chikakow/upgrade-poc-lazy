import { Directive, ElementRef, Injector, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

import 'angular';


declare const angular: any;

export const module = angular.module('AngularJSApp');


module.component('angularjsComponent', {
  template: `
  <div class="ng1">
    ** AngularJS - written in AngularJS and upgraded to Angular
    <br>
    <span class="red-font">You should see this in red if css is working.</span>
    <div class="transclude">
      below is transcluded
      <ng-transclude></ng-transclude>
    </div>
    <br>
    counter: {{$ctrl.counter}}
    <button ng-click="$ctrl.multiply(2)">Double</button>
    <br>
    Bound via a two-way binding: <input ng-model="$ctrl.twoWay">
    <br>
    <button ng-click="$ctrl.notifyMessage('hi')">Notify Message Click 3 times, 
    If alert, then AngularJS Service in AngularJS working - no upgrade needed just link to the js file from angular.json</button>
    </div>
  `,
  bindings: {
    counter: `<`,
    multiply: '&',
    twoWay: '='
  },
  controller: [ componentController]
}
);

function componentController() {
  this.notifyMessage = (msg) => {
    // notifyService.notify(msg);
  };
}



// An AngularJS component upgraded to Angular.
// Note that this is @Directive and not a @Component.
// I could not put styleUrls: [''] there since Directive only accept selector prop.
@Directive({
  selector: 'angularjs-component'
})
// tslint:disable-next-line:directive-class-suffix
export class AngularJSWrapperComponent extends UpgradeComponent implements OnChanges {
  @Input() counter: number;
  @Output() multiply: EventEmitter<number>;

  // We need to declare these two properties.
  // [(twoWay)]="counter" is the same as [twoWay]="counter" (twoWayChange)="counter=$event"
  @Input() twoWay: any;
  @Output() twoWayChange: EventEmitter<string>;

  constructor(ref: ElementRef, inj: Injector) {
    super('angularjsComponent', ref, inj);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
