import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  constructor(private route:Router){}
  ngOnInit(){
    if(localStorage.getItem('loggedin')==null){
      this.route.navigateByUrl("/")
    }
  }
  logout(){
    localStorage.removeItem('loggedin');
  this.route.navigateByUrl("/")
  }

}
