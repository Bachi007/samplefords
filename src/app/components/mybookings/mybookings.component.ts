import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrl: './mybookings.component.css'
})
export class MybookingsComponent {

  constructor(private bookingservice:BookingsService){}
  user:any;username:any;mybookings:any;
    ngOnInit(){
    this.user= localStorage.getItem('loggedin')
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
      this.bookingservice.getBookingsbyUserName(this.username).subscribe((data)=>{
        this.mybookings=data;
        console.log(this.mybookings)
      })

    }

}
