import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from 'src/app/shared/icons/icons.module';
import { CpfInfoCardComponent } from './cpf-info-card.component';


@NgModule({
  declarations: [CpfInfoCardComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [CpfInfoCardComponent]
})
export class CpfInfoCardModule { }
