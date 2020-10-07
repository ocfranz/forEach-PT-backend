# PT-backend
Simple REST API for the Carbon Footprint system raised
## Requirements

You have to have Node js installed, in case you don't have it you can install it [here](https://nodejs.org/en/). Also Mongodb installed locally, but you can use services like [Mogo DB Atlas](https://www.mongodb.com/cloud/atlas) or other remote database
## Installing and Running
Before installing all dependencies you have to duplicate the **.env.example** file an rename to **.env**, if it's necessary you can change the PORT and MONGO_URI values.

Install all dependencies 
```javascript
npm install
```
Start the aplication on development
```javascript
npm run dev:start
```
Build production files, generate **/build** directory
```javascript
npm run build
```
Start the aplication on production
```javascript
npm start
```
## Accessing the API

Clients can access the REST API in the following routes, no type of authentication is implemented
```javascript
/api/v1/types
```
```javascript
/api/v1/trip
```
```javascript
/api/v1/employess
```

The app runs on [http://localhost:5000](http://localhost:3000) 
