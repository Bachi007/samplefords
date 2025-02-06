import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  constructor(private wishservice:WishlistService){}
  wishlist:any;
  ngOnInit(){
    this.wishservice.getallitems().subscribe((data)=>{
      this.wishlist=data;
      console.log(this.wishlist);
    })
  }

}
