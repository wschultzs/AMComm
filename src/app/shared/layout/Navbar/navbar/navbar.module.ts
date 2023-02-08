import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbCollapseModule
  ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
