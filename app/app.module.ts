import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, MissionControlComponent, AstronautComponent],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
