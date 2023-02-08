import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './layout/Navbar/navbar/navbar.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarModule, IconsModule],
  exports: [NavbarModule],
})
export class SharedModule {}
