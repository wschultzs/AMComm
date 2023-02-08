import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PersonFill, CheckCircle } from 'ng-bootstrap-icons/icons';

const icons = {
  PersonFill,
  CheckCircle
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
