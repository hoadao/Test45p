import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-right-body',
  templateUrl: './demo-right-body.component.html',
  styleUrls: ['./demo-right-body.component.css']
})
export class DemoRightBodyComponent implements OnInit {
  @Input() rightWidth: number;
  @Input() leftWidth: number;
  @Input() rightHeight: number;
  @Input() parentHeight: number;
  @Output() cliked = new EventEmitter<boolean>();
  click: boolean;
  increaseRightWidth(click: boolean) {
    this.click = click;
    this.cliked.emit(this.click);
  }
  decreaseRightWidth(click: boolean) {
    this.click = click;
    this.cliked.emit(this.click);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
