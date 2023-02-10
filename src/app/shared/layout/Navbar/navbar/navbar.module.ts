import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, BrowserModule, SharedModule, NgbCollapseModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
