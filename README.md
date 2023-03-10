# CSE341-Blog-Project

## BACKEND

////////////////////////////// RENDER.COM ////////////////////////////////

### GET all Users

GET https://byui-cse-341-groupjasnah.onrender.comuser HTTP/1.1

### DELETE user

DELETE https://byui-cse-341-groupjasnah.onrender.com/user/Elizabeth HTTP/1.1

### user1

POST https://byui-cse-341-groupjasnah.onrender.com/user HTTP/1.1

Content-Type: application/json

{ "username":

"Elizabeth",

"password":

"elizabethtellez@12345",

"firstName": "Elizabeth",

"lastName": "Tellez",

"email": "elizabeth@cse341.com"

}

### PUT updated user1

PUT https://byui-cse-341-groupjasnah.onrender.com/user/Elizabeth HTTP/1.1

content-type: application/json

{ "username":"Elizabeth",

"password":"elizabethtellez@12345",

"firstName":"Elizabeth",

"lastName": "Tellez",

"email": "elizabeth@hotmail.com",

"phoneNumber": "63453958",

"country": "Mexico",

"city": "Iztapalapa",

"birthday": "09/11/1985",

"address": "7095 Woodbine Ave, Iztapalapa" }

////////////////////////////// LOCALHOST USER ////////////////////////////////

###GET all Users

GET http://localhost:8080/user HTTP/1.1

### DELETE user

DELETE http://localhost:8080/user/Owas HTTP/1.1

### POST user2

POST http://localhost:8080/user HTTP/1.1

Content-Type: application/json

{ "username": "Owas",

"password": "Owas@12345",

"firstName": "Owamamwen",

"lastName": "Ogunniyi",

"email": "owas@cse341.com" }

### PUT updateed user2

PUT http://localhost:8080/user/Owas HTTP/1.1

content-type: application/json

{ "username": "Owas",

"password": "Owas@12345",

"firstName": "Owamamwen",

"lastName": "Ogunniyi",

"email": "owas@yahoo.com",

"phoneNumber": "453563635",

"country": "France",

"city": "Paris",

"birthday": "12/11/1991",

"address": "Delta, 48 Boulevard Jourdan, 75014 Paris" }

### POST user3

POST http://localhost:8080/user HTTP/1.1

Content-Type: application/json

{ "username": "Ariel",

"password": "Ariel@12345",

"firstName": "Ariel",

"lastName": "Perez",

"email": "ariel@cse341.com" }

### PUT updated user3

PUT http://localhost:8080/user/Owas HTTP/1.1

content-type: application/json

{ "username": "Ariel",

"password": "Ariel@12345",

"firstName": "Ariel",

"lastName": "Perez",

"email": "ariel@cse341.com",

"phoneNumber": "135363635",

"country": "USA",

"city": "Idaho",

"birthday": "08/09/1989",

"address": "205 N 500 W" }

### POST user4

POST http://localhost:8080/user HTTP/1.1

Content-Type: application/json

{ "username": "Alexis",

"password": "alexis@12345",

"firstName": "Alexis",

"lastName": "Ortiz",

"email": "alexis@cse341.com" }

### PUT updated user4

PUT http://localhost:8080/user/Owas HTTP/1.1

content-type: application/json

{ "username": "Alexis",

"password": "alexis@12345",

"firstName": "Alexis",

"lastName": "Ortiz",

"email": "alexis@cse341.com",

"phoneNumber": "453563635",

"country": "USA",

"city": "Idaho",

"birthday": "08/10/1988",

"address": "205 N 500 W" }
