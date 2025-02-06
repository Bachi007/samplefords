import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../../services/vehicles.service';
import { WishlistService } from '../../services/wishlist.service';
import { vehicle } from '../../services/vehicle';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {

  constructor(private bookingService:BookingsService,private act:ActivatedRoute,private router:Router,private service:VehiclesService, private wishservice:WishlistService){}
  vid:any;newvehicle:any;

  additemtowishlist(){
    //create di for wishlist service as wishservice
    this.wishservice.addtowishlist(this.newvehicle);

    //create di for Router as router
    this.router.navigateByUrl("/user/wishlist");
  }

  user:any;username:any;address:any;phone:any;newbooking:any;

  confirmorder(){
    this.newbooking={
      vehicleId:this.newvehicle.vehicleId,
      vehicleName:this.newvehicle.vehicleName,
      vehiclePrice:this.newvehicle.vehiclePrice,
      username:this.username,
      address:this.address,
      phone:this.phone
    }

    this.bookingService.addnewbooking(this.newbooking);
    alert("vehicle booked successfully")

    console.log(this.newbooking);
  }



  ngOnInit(){
    this.vid=this.act.snapshot.paramMap.get('id');
    console.log(this.vid)
   this.newvehicle= this.service.getVehicleById(this.vid);
   console.log(this.newvehicle)

   this.user= localStorage.getItem('loggedin')
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
  }

}
