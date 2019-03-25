import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-c',
  templateUrl: './lazy-c.component.html',
  styles: []
})
export class LazyCComponent implements OnInit {

  title = 'upgrade-poc';
  counter = 1;
  twoWay: any;
  constructor() { }

  ngOnInit() {
  }


  multiplyCounter(event: number) {
    this.counter = this.counter * event;
  }
}
