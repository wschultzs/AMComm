import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfInfoCardModule } from './components/cpf-info-card/cpf-info-card.module';
import { CpfFormModule } from './components/cpf-form/cpf-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, CpfInfoCardModule, CpfFormModule],
  exports: [MainComponent]
})
export class MainModule {}
