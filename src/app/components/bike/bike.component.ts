import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent {

  constructor(private service:VehiclesService, private router:Router){}
  bikes:any;

  openview(bikeid:any){
    this.router.navigateByUrl("/user/view/"+bikeid);
  }

  ngOnInit(){
    this.service.getAllBikes().subscribe((data)=>{
      this.bikes=data;
      console.log(this.bikes)
    })
  }



}
