import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfFormModule } from './main/components/cpf-form/cpf-form.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainModule],
  exports: [ MainModule ]
})
export class PagesModule {}
