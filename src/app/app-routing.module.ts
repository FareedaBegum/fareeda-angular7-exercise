import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { WeatherDetailsComponent } from '../app/weatherDetails/weather-details.component'

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'weather-details/:city', component: WeatherDetailsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
