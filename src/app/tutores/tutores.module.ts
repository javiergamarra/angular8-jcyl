import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoresComponent } from './tutores.component';
import { TutorComponent } from '../tutor/tutor.component';

@NgModule({
  declarations: [TutoresComponent, TutorComponent],
  imports: [CommonModule],
  exports: [TutoresComponent]
})
export class TutoresModule {}
