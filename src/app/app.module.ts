import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FeatureModule } from './feature/feature.module';
import { ExperienceComponent } from './feature/experience/experience.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FeatureModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
