import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { DemoComponent } from './demo/demo.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoLeftBodyComponent } from './demo-left-body/demo-left-body.component';
import { DemoRightBodyComponent } from './demo-right-body/demo-right-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    DemoComponent,
    ProgressBarComponent,
    DemoHeaderComponent,
    DemoLeftBodyComponent,
    DemoRightBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
