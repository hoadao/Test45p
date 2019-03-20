import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-header',
  templateUrl: './demo-header.component.html',
  styleUrls: ['./demo-header.component.css']
})
export class DemoHeaderComponent implements OnInit {
  public config = {
    headerHeight: 50,
    leftHeight: 350,
    rightHeight: 350,
    parentHeight: 400
  };
  readonly SMALL_GAP = 50;
  increaseHeaderHeight() {
    this.config.headerHeight += this.SMALL_GAP;
    this.config.parentHeight += this.SMALL_GAP;
    this.config.leftHeight -= this.SMALL_GAP;
    this.config.rightHeight -= this.SMALL_GAP;
  }

  decreaseHeaderHeight() {
    this.config.headerHeight -= this.SMALL_GAP;
    this.config.leftHeight += this.SMALL_GAP;
    this.config.rightHeight += this.SMALL_GAP;
  }

  get headerHeight(): number {
    return this.config.headerHeight;
  }

  set headerHeight(value: number) {
    this.config.headerHeight = value;
  }

  get leftHeight(): number {
    return this.config.leftHeight;
  }

  set leftHeight(value: number) {
    this.config.leftHeight = value;
  }

  get rightHeight(): number {
    return this.config.rightHeight;
  }

  set rightHeight(value: number) {
    this.config.rightHeight = value;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
