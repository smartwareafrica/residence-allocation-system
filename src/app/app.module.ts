import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*
*angularFire2 is outdated that is why I john abutto has decided to
*comment it and use the current and recommended version angular/fire
*
*in case of any changes in the module kindly lets communicate to ensure smooth
*running of the app
*/

import { AddHouseService } from './add-house/shared/add-house.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MyHousesComponent } from './my-houses/my-houses.component';
import { ViewHouseComponent } from './view-house/view-house.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    RegisterComponent,
    AddHouseComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ThankYouComponent,
    MyHousesComponent,
    ViewHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideZoneChangeDetection(), AddHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
