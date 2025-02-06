import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;pwd:any;
  constructor(private router:Router){}
  checklogin(){
    this.pwd=this.username.slice(0,3);
    this.pwd=this.pwd+"123";
    if(this.username=="admin"){
      if(this.password=="12345")
       {
        //since username and password is admin and 12345 
        // we are redirecting to admindashboard
        Swal.fire({
          title: "Good job Admin!",
          text: "Login Successful!",
          icon: "success"
        });
        this.router.navigateByUrl("/admin/view");
        //store the username in localstorage  
        this.user={
          username:this.username
        }
        localStorage.setItem("loggedin",JSON.stringify(this.user));
   
        }
        else{
          alert("Invalid login");
        }
    }
    else if(this.password==this.pwd){
      Swal.fire({
        title: "Good job "+this.username,
        text: "Login Success!",
        icon: "success"
      });
      this.router.navigateByUrl("/user/bike");
      //store the username in localstorage  
      this.user={
        username:this.username
      }
      localStorage.setItem("loggedin",JSON.stringify(this.user));
    }
    else{
      alert("invalid username or password");
    }



  }

}
