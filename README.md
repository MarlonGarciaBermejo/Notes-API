  Notes:
  GET - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes
  POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes
  PUT - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes/{notesId}
  DELETE - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes/{notesId}

  Auth:
  POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signup
  JSON Input:
      { 	
		 "username": "user", 
		 "password": "password"
     "firstname": "firstname"
     "lastname": "lastname"
		}
  
  POST - https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signin
  JSON Input:
      { 	
		 "username": "user", 
		 "password": "password"	
		}
  
