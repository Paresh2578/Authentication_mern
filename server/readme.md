
#  APIs

### MongoURL 
```
mongodb+srv://pareshchaudhary330:P%40resh%232005ClusterParesh@paresh.5cm8a.mongodb.net/alterf4
```

### Run backend
``` 
npm run dev
```

### GIMINI API
``` 
POST  https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDuq-ZCT9oPgUwMSBqYDfp8JBqeTQPExv4
```
```
Body = {"contents":[{"parts":[{"text":"hamster kombat mining"}]}]}
```

#### Register user
``` 
 POST   http://localhost:5447/api/user/register
```
```json
 {
  "name" : "test4",
  "email" : "text@gmail.com",
  "password" : "123"
}
``` 

#### Log in user
``` 
 POST  http://localhost:5447/api/user/login
 ```
```json
{
  "email" : "text@gmail.com",
  "password" : "123"
}
``` 

#### Forget passoword
``` 
 POST http://localhost:5447/api/user/forgetPassword
 ```
```json
{
  "email" : "text@gmail.com",
}
``` 