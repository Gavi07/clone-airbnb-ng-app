import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { SharedModule } from './shared/shared.module';
import { BookingModule } from './booking/booking.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { ErrorPageModule } from './error-page/error-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DetailModule,
    SharedModule,
    BookingModule,
    SigninModule,
    SignupModule,
    ErrorPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
