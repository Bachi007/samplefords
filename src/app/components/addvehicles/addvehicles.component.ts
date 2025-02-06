import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { vehicle } from '../../services/vehicle';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvehicles',
  templateUrl: './addvehicles.component.html',
  styleUrl: './addvehicles.component.css'
})
export class AddvehiclesComponent {

  addvehicleForm:FormGroup=new FormGroup({})

  constructor(private fb:FormBuilder,private router:Router,private service:VehiclesService){
    this.addvehicleForm=this.fb.group({
      vehicleId:fb.control('',Validators.required),
      vehicleName:fb.control('',Validators.required),
      vehicleCompany:fb.control('',Validators.required),
      vehicleDescription:fb.control('',Validators.required),
      vehicleType:fb.control('',Validators.required),
      vehicleImage:fb.control('',Validators.required),
      vehiclePrice:fb.control('',Validators.required),
    })
  }
  options=["bike","car","jeep"]

  newvehicle(){
    this.service.addvehicle(this.addvehicleForm.value);
    alert("added");
    this.router.navigateByUrl("/admin/manage")
  }


}
