import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MyHousesComponent } from './my-houses/my-houses.component';
import { ViewHouseComponent } from './view-house/view-house.component';

const routes: Routes = [
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addHouse', component: AddHouseComponent },
  { path: 'thankYou', component: ThankYouComponent},
  { path: 'myHouses', component: MyHousesComponent},
  { path: 'viewHouse', component: ViewHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
