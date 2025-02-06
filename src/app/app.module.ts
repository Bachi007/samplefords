import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CarComponent } from './components/car/car.component';
import { BikeComponent } from './components/bike/bike.component';
import { JeepComponent } from './components/jeep/jeep.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ViewbookingsComponent } from './components/viewbookings/viewbookings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarComponent,
    BikeComponent,
    JeepComponent,
    ViewvehiclesComponent,
    ManagevehiclesComponent,
    AddvehiclesComponent,
    MybookingsComponent,
    WishlistComponent,
    ViewbookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
