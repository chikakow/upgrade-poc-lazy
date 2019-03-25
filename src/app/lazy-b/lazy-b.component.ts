import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-b',
  template: `
    <div>
      Angular Lazy Loaded B!
      <app-header></app-header>
    </div>
  `,
  styles: []
})
export class LazyBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
