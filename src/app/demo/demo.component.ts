import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  protected headerHeight = 50;
  protected mainWidth = 400;
  protected sidebarWidth = 400;
  ngOnInit(): void {
  }

  onClick1() {
    this.headerHeight += 10;
  }

  onClick2() {
    this.headerHeight -= 10;
  }

  onClick3() {
    this.mainWidth += 10;
    this.sidebarWidth -= 10;
  }

  onClick4() {
    this.mainWidth -= 10;
    this.sidebarWidth += 10;
  }

  onClick5() {
    this.sidebarWidth += 10;
    this.mainWidth -= 10;
  }

  onClick6() {
    this.sidebarWidth -= 10;
    this.mainWidth += 10;
  }
}
