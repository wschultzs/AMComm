import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './layout/Navbar/navbar/navbar.module';
import { IconsModule } from './icons/icons.module';
import { HeaderModule } from './layout/header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarModule, IconsModule, HeaderModule],
  exports: [NavbarModule, HeaderModule],
})
export class SharedModule {}
