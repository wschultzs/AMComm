import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { HeaderModule } from './layout/header/header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    IconsModule,
    HeaderModule
  ],
  exports: [HeaderModule, IconsModule],
})
export class SharedModule {}
