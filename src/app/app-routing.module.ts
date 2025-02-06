import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarComponent } from './components/car/car.component';
import { BikeComponent } from './components/bike/bike.component';
import { JeepComponent } from './components/jeep/jeep.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { ViewbookingsComponent } from './components/viewbookings/viewbookings.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'car',component:CarComponent},
      {path:'bike',component:BikeComponent},
      {path:'jeep',component:JeepComponent},
      {path:'mybookings',component:MybookingsComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'view/:id',component:ViewvehiclesComponent}
    ]
  },
  {
    path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'add',component:AddvehiclesComponent},
      {path:'manage',component:ManagevehiclesComponent},
      {path:'view',component:ViewvehiclesComponent},
      {path:'bookings',component:ViewbookingsComponent}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
