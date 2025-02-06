import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  len:any;
  constructor(private route:Router,private wishservice:WishlistService){}
  ngOnInit(){
    if(localStorage.getItem('loggedin')==null){
      this.route.navigateByUrl("/")
    }

    
  } 

  logout(){
    localStorage.removeItem('loggedin');
  this.route.navigateByUrl("/")
  }

  ngDoCheck(){
    //create DI for wishlist service as wishservice
    this.len=this.wishservice.getWishlistLength();
  }     

}
