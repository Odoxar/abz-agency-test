import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { IconComponent } from './icon/icon.component';
import { SvgSignOutComponent } from "./svg-sign-out/svg-sign-out.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    LogoComponent,
    IconComponent,
        SvgSignOutComponent,
  ],
  exports: [
    LogoComponent,
    IconComponent,
        SvgSignOutComponent,
  ]
})
export class SvgModule {}
