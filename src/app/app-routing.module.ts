import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/components/booking/booking.component';
import { DetailComponent } from './detail/components/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';
import { SigninComponent } from './signin/components/signin/signin.component';
import { SignupComponent } from './signup/components/signup/signup.component';


// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'detail', component: DetailComponent },
//   { path: 'booking', component: BookingComponent },
//   { path: 'signin', component: SigninComponent },
//   { path: 'signup', component: SignupComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
