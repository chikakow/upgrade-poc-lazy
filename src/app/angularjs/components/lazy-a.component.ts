import { module } from '../angularjsapp';
declare const require: any;
import ns = require( '../services/notify.service');


requirejs(['angular', 'angularJsApp'], (ng, app) => {
  module.component('lazyJsA', {
    template: `
  AngularJs Lazy A!
  <ngjs-header></ngjs-header>
    <div class="ng1">
    <br>
    <br>
    counter: {{$ctrl.counter}}
    <button ng-click="$ctrl.multi(2)">Double</button>
    <br>
    <br>
    <button ng-click="$ctrl.notifyMessage('hi')">Notify Message Click 3 times,
    If alert, then AngularJS Service in AngularJS working - no upgrade needed just link to the js file from angular.json</button>
    </div>
    `,
    bindings: {},
    controller: ['notifyService', componentController]
  });

  // 'notifyService',
  function componentController(notifyService) {
    this.counter = 1;
    this.notifyMessage = msg => {
      notifyService.notify(msg);
    };
    this.multi = times => {
      console.log('hey', times, this.counter);
      this.counter = this.counter * times;
    };
  }
});
