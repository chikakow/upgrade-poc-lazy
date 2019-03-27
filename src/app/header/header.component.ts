import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div style="background-color: aliceblue;">
      <div><a href="/angular_a">Go to Angular A</a></div>
      <div><a href="/angular_b">Go to Angular Lazy B</a></div>
      <div><a href="/angular_c">Go to Angular Lazy C - had to comment requirejs r.js # line</a></div>
      <div><a href="/lazyloaded_js/angularjs_a">Go to Angular JS Lazy A</a></div>
      <div><a href="/lazyloaded_js/angularjs_b">Go to Angular JS Lazy B</a></div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
