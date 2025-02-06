import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookings:any[]=[];

  constructor() { }

  addnewbooking(newbook:any){
    this.bookings.push(newbook);
  }

  getallbookings(){
    return of(this.bookings);
  }

  getBookingsbyUserName(uname:any){
    return of (this.bookings.filter((e)=>e.username==uname));
  }


}
