import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormComponent } from './cpf-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfInfoCardModule } from '../cpf-info-card/cpf-info-card.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [CpfFormComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreModule,
    CpfInfoCardModule,
    ReactiveFormsModule
  ],
  exports: [ CpfFormComponent ]
})
export class CpfFormModule { }
