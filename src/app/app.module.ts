import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MousePositionComponent } from './components/mouse-position/mouse-position.component';
import { ScalelineComponent } from './components/scaleline/scaleline.component';
import { MapComponent } from './components/map/map.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MousePositionComponent,
    ScalelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
