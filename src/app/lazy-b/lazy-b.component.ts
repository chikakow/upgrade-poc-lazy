import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-b',
  template: `
    <div>
      Angular Lazy Loaded B!
      <div><a href="/angular_a">Go to Angular A</a></div>
      <div>Go to Angular B</div>
      <div><a href="/angular_c">Go to Angular C</a></div>
      <div><a href="/angularjs_a">Go to Angular JS A</a></div>
      <div><a href="/angularjs_b">Go to Angular JS B</a></div>
    </div>
  `,
  styles: []
})
export class LazyBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
