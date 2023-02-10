import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../../icons/icons.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, BrowserModule, NgbCollapseModule, IconsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
