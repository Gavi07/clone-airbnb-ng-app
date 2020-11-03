import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', loadChildren: () => import('./home/home.module').then( mod => mod.HomeModule) },
    { path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then( mod => mod.DetailModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then( mod => mod.SignupModule) },
    { path: 'signin', loadChildren: () => import('./signin/signin.module').then( mod => mod.SigninModule) },
    { path: 'booking/:id', loadChildren: () => import('./booking/booking.module').then( mod => mod.BookingModule) },
    { path: '404', loadChildren: () => import('./error-page/error-page.module').then( mod => mod.ErrorPageModule) },
    { path: '**', redirectTo: '/404'}
];
