import 'angular';
import 'angular-ui-router';

declare const angular: any;


export const module = angular.module('AngularJSApp', ['ui.router']);







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



