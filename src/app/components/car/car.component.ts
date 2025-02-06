import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  constructor(private service:VehiclesService, private router:Router){}
  bikes:any;

  openview(bikeid:any){
    this.router.navigateByUrl("/user/view/"+bikeid);
  }

  ngOnInit(){
    this.service.getAllCars().subscribe((data)=>{
      this.bikes=data;
    })
  }

}
