# Rentaldotcom

			#Rentaldotcom

	Rental.com is a web application where it has two types of users, end-users and admin, user can login into the application and he can view different vehicles which available for rental on day purpose, we have cars, bikes, jeeps as rental vehicles, here admin is responsible to manage all the vehicles and add new vehicles, manage bookings of the customers. 

components : login, userdashboard, admin dashboard, view vehicles,my bookings, view bookings, wishlist, add new vehicles, car, bike, jeep, manage vehicles

services : vehicle service, booking service, wish list service

1. create new project with no standalone architecture with following cmd : 
	ng new rental --no-standalone
. create all the components and services

3. create the routing for both admin and user 

4. create the login functionality for both user and admin and redirect to different dashboard based on the username (by adding bootstrap.min.css and bootstrap.bundle.min.js cdn links)

5. store the user object in localstorage for route authentication for both user and admin in login.comp.ts

6. to work with sweetalert2, install sweetalert2 using npm install sweetalert2 command
then import Swal from sweetalert2 in login.comp.ts, use Swal.fire method


7. check localstorage when user try to access dashboard, if localstorage is empty redirect him to login

8. userdashboard implementation : create vehicle.ts class in service folder to create structure of the objects and create list of vehicles in vehicle service

9. create getBikes(), getAllvehicles, getCars(),getJeeps() method to return the data to components in vehicle service


localhost:4200/user/view/6

Activated route :  params   


10. to implement view vehicle logic : create a special routing as /view/:id in user children, here id is used to store/read one variable from url 

11. in bikes component when user clicked on a name of the bike we should call one method to redirect the user to view vehicle component along with vehicle id


12. now we redirected to view vehicle component along with vehicle id in the url, here based on the id we need to display vehicle so implement one service method to display vehicle using its id


13. in view vehicle component we need to read the value from url so we are usig activatedRoute to read the value and pass that value to service method to get requested vehicle

14. to implement wishlist functionality : create wishlist array in wishlist service along with 3 methods addtowishlist, getallitems, getwishlist length;

15. now when to add to wishlist is clicked in view vehicle component push that vehicle object to service method

16. in wishlist component implement ngoninit to load the data of wishlist service 

ngDoCheck : it is used to execute a block of code for every action that happened in the webpage

17. to display no of elements of wishlist as badge in userdashboard.comp.ts use ngDoCheck to check the length of array

18. implement booking now functionality : after clicking on buy now button we need to load a modal with following values

vehicleid, vehicleName,vehiclePrice => from newvehicle obect

username => from localstorage

address, phone => user can enter


19. create a booking array in booking service with 3 methods called addnewbookng, getallbookings, getbookingbyusername;

20. to display all bookings of user, load the username from localstorage and pass it to booking service method called getbookinbyusername;

21. print the all booking data in table format in booking.comp.html
