import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './section/banner/banner.component';
import { AboutMeComponent } from './section/about-me/about-me.component';
import { RelationshipsComponent } from './section/relationships/relationships.component';
import { RequirementsComponent } from './section/requirements/requirements.component';
import { UsersComponent } from './section/users/users.component';
import { SignUpComponent } from './section/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    RelationshipsComponent,
    RequirementsComponent,
    UsersComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
