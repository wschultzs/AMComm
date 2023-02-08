import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormModule } from './main/componeents/CpfForm/cpf-form/cpf-form.module';
import { MainModule } from './main/main.module';
import { CpfInfoCardModule } from './main/componeents/cpf-info-card/cpf-info-card.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainModule,
    CpfInfoCardModule,
    CpfFormModule
  ]
})
export class PagesModule { }
