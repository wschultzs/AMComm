import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import {
  PersonFill,
  CheckCircle,
  Bell,
  CreditCard,
  Star,
  Search,
  ChatLeftDots,
  Bank,
  Sliders,
  List
} from 'ng-bootstrap-icons/icons';

const icons = {
  PersonFill,
  CheckCircle,
  Bell,
  CreditCard,
  Star,
  Search,
  ChatLeftDots,
  Bank,
  Sliders,
  List
};

@NgModule({
  declarations: [],
  imports: [CommonModule, BootstrapIconsModule.pick(icons)],
  exports: [BootstrapIconsModule],
})
export class IconsModule {}
