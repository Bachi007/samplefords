import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist:any[]=[];
  constructor() { }

  addtowishlist(newpro:any){
    this.wishlist.push(newpro);
  }

  getallitems(){
    return of( this.wishlist);
  }

  getWishlistLength(){
    return this.wishlist.length;
  }

}
