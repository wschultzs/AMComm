import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { HeaderModule } from './layout/header/header.module';
import { NavbarModule } from './layout/navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsModule,
    HeaderModule,
    NavbarModule
  ],
  exports: [HeaderModule, IconsModule, NavbarModule],
})
export class SharedModule {}
