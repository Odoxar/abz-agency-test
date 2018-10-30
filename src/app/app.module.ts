import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ClickOutsideModule } from "ng-click-outside";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './section/banner/banner.component';
import { AboutMeComponent } from './section/about-me/about-me.component';
import { RelationshipsComponent } from './section/relationships/relationships.component';
import { RequirementsComponent } from './section/requirements/requirements.component';
import { UsersComponent } from './section/users/users.component';
import { SignUpComponent } from './section/sign-up/sign-up.component';
import { SelectComponent } from './shared/component/select/select.component';
import { FooterComponent } from './footer/footer.component';
import { SvgModule } from './shared/svg/svg.module';
import { MenuComponent } from './shared/component/menu/menu.component';
import { LoginComponent } from "./shared/component/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    RelationshipsComponent,
    RequirementsComponent,
    UsersComponent,
    SignUpComponent,
    SelectComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ClickOutsideModule,
    SvgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
