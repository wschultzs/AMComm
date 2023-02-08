import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormComponent } from './cpf-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { CpfInfoCardModule } from '../../cpf-info-card/cpf-info-card.module';



@NgModule({
  declarations: [CpfFormComponent],
  imports: [
    CommonModule,
    CoreModule,
    CpfInfoCardModule,
    FormsModule
  ],
  exports: [ CpfFormComponent ]
})
export class CpfFormModule { }
