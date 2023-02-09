import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PersonFill, CheckCircle, Bell, CreditCard } from 'ng-bootstrap-icons/icons';

const icons = {
  PersonFill,
  CheckCircle,
  Bell,
  CreditCard
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports: [BootstrapIconsModule]
})
export class IconsModule { }
