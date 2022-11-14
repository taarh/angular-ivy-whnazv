import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IntroductionComponent,ExperienceComponent],
  exports: [IntroductionComponent,ExperienceComponent],
})
export class FeatureModule {}
