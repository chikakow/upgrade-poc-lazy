(function () {
  'use strict';


var module = angular.module('AngularJSApp', ['ui.router']);

// Header
module.component('ngjsHeader', {
  template: `
  <div style="background-color: yellow">
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular Lazy B</a></div>
        <div><a href="/angular_c">Go to Angular Lazy C - had to comment requirejs r.js # line</a></div>
        <div><a href="/lazyloaded_js/angularjs_a">Go to Angular JS Lazy A</a></div>
        <div><a href="/lazyloaded_js/angularjs_b">Go to Angular JS Lazy B</a></div>
  </div>`
});

// Services
module.service('stringService', () => {
  return {
    getString: () => {
      return `Howdie I'm from AngularJs service injected into AngularJs Service Not Registered in Angular`;
    }
  };
});

module.service('notifyService', [
  '$window',
  'stringService',
  (win, stringService) => {
    let msgs = [];
    return {
      notify: msg => {
        msgs.push(msg);
        if (msgs.length === 3) {
          msgs.push(stringService.getString());
          win.alert(msgs.join('\n'));
          msgs = [];
        }
      }
    };
  }
]);

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

module.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('angularjs_a', {
    url: '/lazyloaded_js/angularjs_a',
    component: 'lazyJsA'
  });

  $stateProvider.state('angularjs_b', {
    url: '/lazyloaded_js/angularjs_b',
    template: `
        <div>AngularJS Lazy B!</div>
        <ngjs-header></ngjs-header>
    `
  });

  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});

module.run($rootScope => {
  console.log('Running AngularJS application');

  $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    console.log('$stateChangeStart', toState, toParams);
  });
});

})();

