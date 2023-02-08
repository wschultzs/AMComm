import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './directives/cpf.directive';



@NgModule({
  declarations: [CpfMaskDirective],
  imports: [
    CommonModule
  ],
  exports: [ CpfMaskDirective ]
})
export class CoreModule { }
