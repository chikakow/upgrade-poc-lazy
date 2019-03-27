import {module} from '../angularjsapp';

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
