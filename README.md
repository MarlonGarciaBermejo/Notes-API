[Notes-API.json](https://github.com/MarlonGarciaBermejo/Notes-API/files/13491211/Notes-API.json)## NOTES-API

### INSOMNIA-Config File: 


### Endpoints:[Uploading Notes-API.json{"_type":"export","__export_format":4,"__export_date":"2023-11-28T17:14:31.168Z","__export_source":"insomnia.desktop.app:v8.4.5","resources":[{"_id":"req_fe483c21c71d44d99fa955b8ea52b796","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701188179023,"created":1701007483305,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes","name":"deleteNote","description":"","method":"DELETE","body":{"mimeType":"application/json","text":"{\n\n\"id\": \"JbSaoVZw5HxGF2xgc8HAx\",\n\"title\": \"KÖP DETTA NU\",\n\"text\": \"Fisksoppa, köttbullar, potatimos\"\n\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.5"}],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hcmxvbjEiLCJ1c2VySWQiOiI5cXFVSV9qWDh6VWREQW5QOE92TVIiLCJpYXQiOjE3MDExODc5OTMsImV4cCI6MTcwMTE5MTU5M30.vqMayNLrX0Xbkx6TZhTTrDRXp_B-D4SJYZldoCpfU0I"},"metaSortKey":-1701007483305,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"wrk_0b3aec59b02e40adbd2676999d66b27a","parentId":null,"modified":1701009187283,"created":1699539839754,"name":"Notes-API","description":"School project\n","scope":"design","_type":"workspace"},{"_id":"req_3b91e374def14ed29208689a49f90f0b","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701189187646,"created":1701007466590,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes","name":"changeNote","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\n\"id\": \"XQG4vzleseow7vn8DzpG9\",\n\t\"title\": \"My list\",\n\t\"text\": \"Eat, train, work, study, clean\"\n\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.5"}],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik9saXZlciIsInVzZXJJZCI6IkRva1VoU1VrR2FpQ1hlbUtvM0g5SCIsImlhdCI6MTcwMTE4OTA4NiwiZXhwIjoxNzAxMTkyNjg2fQ.2ZsBw2oV8ncOpS2S_7EMPQ2Vao_wu-7sTqyQZWtdXPE"},"metaSortKey":-1701007466590,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_c76023c6209f4535a3295c6016b4cd23","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701189115847,"created":1701007454158,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes","name":"postNote","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"title\": \"My list\",\n\t\"text\": \"Eat, train, work, study, clean\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.5"}],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik9saXZlciIsInVzZXJJZCI6IkRva1VoU1VrR2FpQ1hlbUtvM0g5SCIsImlhdCI6MTcwMTE4OTA4NiwiZXhwIjoxNzAxMTkyNjg2fQ.2ZsBw2oV8ncOpS2S_7EMPQ2Vao_wu-7sTqyQZWtdXPE"},"metaSortKey":-1701007454158,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_31b799e00195445483e8e3b896f6dfa3","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701184871880,"created":1701007420476,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/notes","name":"getNotes","description":"","method":"GET","body":{"mimeType":"application/json","text":""},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.5"}],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hcmxvbjEiLCJ1c2VySWQiOiI5cXFVSV9qWDh6VWREQW5QOE92TVIiLCJpYXQiOjE3MDExODQ4NjMsImV4cCI6MTcwMTE4ODQ2M30.Ynln-NNxr77VPk1OGuI_C9VGxNbUyVM5DC9A2eTmp-s"},"metaSortKey":-1701007420476,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_f4cc3e71b1e64faf8a62e24477783784","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701189071719,"created":1701007403518,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signup","name":"signup","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\n\"username\": \"Oliver\",\n\n\"password\": \"oliver123\",\n\t\n\"firstname\": \"Oliver\",\n\t\n\"lastname\": \"Abrahamsson\"\n\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.5"}],"authentication":{},"metaSortKey":-1701007403518,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_71c26771e3104d51932bb1325a72b9de","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701189084897,"created":1700563300039,"url":"https://qfwv8mb1k6.execute-api.eu-north-1.amazonaws.com/auth/signin","name":"login","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\n\"username\": \"Oliver\",\n\n\"password\": \"oliver123\"\n\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.4.2"}],"authentication":{"type":"bearer","token":""},"metaSortKey":-1700563300039,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_232283d7481ace855644b5c6923fcb7c28cac789","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701009205643,"created":1699539839762,"name":"Base Environment","data":{},"dataPropertyOrder":{},"color":null,"isPrivate":false,"metaSortKey":1699539839762,"_type":"environment"},{"_id":"jar_232283d7481ace855644b5c6923fcb7c28cac789","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1699539839764,"created":1699539839764,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_6b7c90b960b5496eb833e9a948a26e82","parentId":"wrk_0b3aec59b02e40adbd2676999d66b27a","modified":1701009187283,"created":1699539855963,"fileName":"Notes-API","contents":"Internal Server Error","contentType":"yaml","_type":"api_spec"}]}…]()

  
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
   
   "title": ""
   
   "text": ""

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

     
       	
		  
		 
		
  
