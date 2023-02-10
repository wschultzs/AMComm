import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from 'src/app/shared/icons/icons.module';
import { CpfInfoCardComponent } from './cpf-info-card.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DuplicarContaModalComponent } from './components/duplicar-conta-modal/duplicar-conta-modal.component';

@NgModule({
  declarations: [CpfInfoCardComponent, DuplicarContaModalComponent],
  imports: [CommonModule, IconsModule, ReactiveFormsModule],
  exports: [CpfInfoCardComponent],
})
export class CpfInfoCardModule {}
