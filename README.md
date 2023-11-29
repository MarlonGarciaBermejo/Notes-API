# Notes-API

  ## Endpoints:
  
  Notes:
  1. GET - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes
  2. POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes

  JSON Input:
  
  {
  
   "title": "",
   
   "text": ""

   } 


  3. PUT - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes

  JSON Input:
 
  {
  
   "id": "",
   
   "title": ""
   
   "text": ""

   } 

  4. DELETE - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes

  JSON Input:

  {
  
   "id": "",
   
   "username": ""

   } 

   Auth:
  1. POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signup
     
     JSON Input:

     {
  
       "username": "user",
   
       "password": "password"
   
       "firstname": "firstname"

       "lastname": "lastname"

     } 
  
  1. POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signin
     
     JSON Input:

     {
     
       "username": "user",

       "password": "password"

      }

     
       	
		  
		 
		
  
