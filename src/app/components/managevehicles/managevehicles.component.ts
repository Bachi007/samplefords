import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-managevehicles',
  templateUrl: './managevehicles.component.html',
  styleUrl: './managevehicles.component.css'
})
export class ManagevehiclesComponent {

  constructor(private service:VehiclesService){

  }
  vehicles:any;
  ngOnInit(){
    this.service.getAllVehicles().subscribe((data)=>{
      this.vehicles=data;
    })
  }
}
