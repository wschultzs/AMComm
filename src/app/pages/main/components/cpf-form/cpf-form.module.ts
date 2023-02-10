import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormComponent } from './cpf-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfInfoCardModule } from '../cpf-info-card/cpf-info-card.module';



@NgModule({
  declarations: [CpfFormComponent],
  imports: [
    CommonModule,
    CoreModule,
    CpfInfoCardModule,
    ReactiveFormsModule,
  ],
  exports: [ CpfFormComponent ]
})
export class CpfFormModule { }
