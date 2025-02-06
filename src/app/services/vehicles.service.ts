import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
   vehicles:vehicle[] = [
    // Bikes
    {
        vehicleId: 1,
        vehicleName: "R15 V4",
        vehicleCompany: "Yamaha",
        vehicleDescription: "A sporty and stylish bike with great performance.",
        vehicleType: "bike",
        vehiclePrice: 180000,
        vehicleImage: "https://shop.yamaha-motor-india.com/cdn/shop/files/Red_1200x.webp?v=1704789964"
    },
    {
        vehicleId: 2,
        vehicleName: "KTM Duke 390",
        vehicleCompany: "KTM",
        vehicleDescription: "A high-performance street bike with advanced features.",
        vehicleType: "bike",
        vehiclePrice: 290000,
        vehicleImage: "https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/orp/390-duke-orange.webp"
    },
    {
        vehicleId: 3,
        vehicleName: "Royal Enfield Classic 350",
        vehicleCompany: "Royal Enfield",
        vehicleDescription: "A powerful and classic-looking cruiser bike.",
        vehicleType: "bike",
        vehiclePrice: 210000,
        vehicleImage: "https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/orp/390-duke-orange.webp"
    },
    {
        vehicleId: 4,
        vehicleName: "Apache RTR 200",
        vehicleCompany: "TVS",
        vehicleDescription: "A sporty commuter bike with excellent handling.",
        vehicleType: "bike",
        vehiclePrice: 140000,
        vehicleImage: "https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/orp/390-duke-orange.webp"
    },
    {
        vehicleId: 5,
        vehicleName: "Honda CB350",
        vehicleCompany: "Honda",
        vehicleDescription: "A retro-modern bike with a smooth riding experience.",
        vehicleType: "bike",
        vehiclePrice: 190000,
        vehicleImage: "https://www.hondabigwing.in/Content/images/CB350_newModel/Color/DLX/Pearl_Igneous_Black_dev1.png"
    },
    {
        vehicleId: 6,
        vehicleName: "Suzuki Gixxer SF 250",
        vehicleCompany: "Suzuki",
        vehicleDescription: "A fully-faired bike with a refined engine.",
        vehicleType: "bike",
        vehiclePrice: 180000,
        vehicleImage: "https://www.hondabigwing.in/Content/images/CB350_newModel/Color/DLX/Pearl_Igneous_Black_dev1.png"
    },
    
    // Cars
    {
        vehicleId: 7,
        vehicleName: "Swift",
        vehicleCompany: "Maruti Suzuki",
        vehicleDescription: "A budget-friendly and fuel-efficient hatchback.",
        vehicleType: "car",
        vehiclePrice: 700000,
        vehicleImage: "swift.jpg"
    },
    {
        vehicleId: 8,
        vehicleName: "Hyundai Creta",
        vehicleCompany: "Hyundai",
        vehicleDescription: "A feature-packed compact SUV.",
        vehicleType: "car",
        vehiclePrice: 1200000,
        vehicleImage: "creta.jpg"
    },
    {
        vehicleId: 9,
        vehicleName: "Tata Harrier",
        vehicleCompany: "Tata",
        vehicleDescription: "A stylish and rugged mid-size SUV.",
        vehicleType: "car",
        vehiclePrice: 1500000,
        vehicleImage: "harrier.jpg"
    },
    {
        vehicleId: 10,
        vehicleName: "Honda City",
        vehicleCompany: "Honda",
        vehicleDescription: "A premium sedan with a smooth driving experience.",
        vehicleType: "car",
        vehiclePrice: 1400000,
        vehicleImage: "city.jpg"
    },
    {
        vehicleId: 11,
        vehicleName: "Mahindra Thar",
        vehicleCompany: "Mahindra",
        vehicleDescription: "A rugged off-road SUV with an adventurous look.",
        vehicleType: "car",
        vehiclePrice: 1700000,
        vehicleImage: "thar.jpg"
    },
    {
        vehicleId: 12,
        vehicleName: "Volkswagen Virtus",
        vehicleCompany: "Volkswagen",
        vehicleDescription: "A premium sedan with German engineering.",
        vehicleType: "car",
        vehiclePrice: 1500000,
        vehicleImage: "virtus.jpg"
    },
    
    // Jeeps
    {
        vehicleId: 13,
        vehicleName: "Jeep Compass",
        vehicleCompany: "Jeep",
        vehicleDescription: "A premium compact SUV with off-road capabilities.",
        vehicleType: "jeep",
        vehiclePrice: 2200000,
        vehicleImage: "compass.jpg"
    },
    {
        vehicleId: 14,
        vehicleName: "Mahindra Scorpio-N",
        vehicleCompany: "Mahindra",
        vehicleDescription: "A powerful and spacious SUV.",
        vehicleType: "jeep",
        vehiclePrice: 1800000,
        vehicleImage: "scorpio-n.jpg"
    },
    {
        vehicleId: 15,
        vehicleName: "Toyota Fortuner",
        vehicleCompany: "Toyota",
        vehicleDescription: "A full-size SUV with great road presence.",
        vehicleType: "jeep",
        vehiclePrice: 3200000,
        vehicleImage: "fortuner.jpg"
    },
    {
        vehicleId: 16,
        vehicleName: "Ford Endeavour",
        vehicleCompany: "Ford",
        vehicleDescription: "A feature-rich premium SUV.",
        vehicleType: "jeep",
        vehiclePrice: 3300000,
        vehicleImage: "endeavour.jpg"
    },
    {
        vehicleId: 17,
        vehicleName: "Isuzu D-Max V-Cross",
        vehicleCompany: "Isuzu",
        vehicleDescription: "A rugged and practical lifestyle pickup truck.",
        vehicleType: "jeep",
        vehiclePrice: 2500000,
        vehicleImage: "dmax-vcross.jpg"
    },
    {
        vehicleId: 18,
        vehicleName: "Force Gurkha",
        vehicleCompany: "Force Motors",
        vehicleDescription: "An extreme off-roading SUV.",
        vehicleType: "jeep",
        vehiclePrice: 1600000,
        vehicleImage: "gurkha.jpg"
    }
];

addvehicle(newvehicle:vehicle){
  console.log(newvehicle)
  this.vehicles.push(newvehicle);
}
  getAllVehicles(){
    return of (this.vehicles);
  }

  getAllBikes(){
    console.log(this.vehicles);
    return of (this.vehicles.filter((e)=>e.vehicleType=="bike"))
  }

  getAllCars(){
    return of (this.vehicles.filter((e)=>e.vehicleType=='car'));
  }

  getVehicleById(vid:any){
    return (this.vehicles.find((e)=>e.vehicleId==vid));
  }

  constructor() { }
}
