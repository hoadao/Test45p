import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-left-body',
  templateUrl: './demo-left-body.component.html',
  styleUrls: ['./demo-left-body.component.css']
})
export class DemoLeftBodyComponent implements OnInit {
  @Input() leftHeight: number;
  @Input() rightHeight: number;
  @Input() parentHeight: number;
  leftWidth = 400;
  rightWidth = 400;
  readonly SMALL_GAP = 10;

  constructor() {
  }

  increaseLeftWidth() {
    this.leftWidth += this.SMALL_GAP;
    this.rightWidth -= this.SMALL_GAP;
  }

  decreaseLeftWidth() {
    this.leftWidth -= this.SMALL_GAP;
    this.rightWidth += this.SMALL_GAP;
  }

  parentClick(click: boolean) {
    if (click) {
      this.decreaseLeftWidth();
    } else {
      this.increaseLeftWidth();
    }
  }

  ngOnInit() {
  }

}
