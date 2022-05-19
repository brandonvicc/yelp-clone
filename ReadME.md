# Yalp!
## General Description
Yalp! is a platform for people to promote how well kept their businesses are by recieving great reviews left by people who attended their businesses. Businesses can recieve good or bad reviews depended on how well they take care of their customers. Yalp! gives basic information about a business so people can try out new businesses or businesses who are trending with good reviews. Viewing reviews has become an absolute go-to when attending new businesses so why not check out Yalp!

## Frontend Overview

### React
Yalp!'s frontend logic is carried by React. Yalp is a React application at its core.

### Redux
Yalp! uses Redux to manage its state during the users experience of the app.

## Backend Overview

### Express
Yalp! uses an express api to store information about users, businesses, and reviews. Which can be retrieved by Redux and displayed by React.

### PostgreSQL 
Yalp! uses PostgreSQL as the database because of it reliability and ease of use with deployment.

### Sequelize
Yalp! has Sequelize integrated as the ORM. Sequelize makes interacting with the database throughout the app really easy.

### S3
Yalp! utilizes S3 so users can add files from their computer.

## Features

### Business

Create / Read

 ![business-create-view](https://user-images.githubusercontent.com/75706553/169176676-de2cc0f6-0e4e-49a1-9648-f3ddf06f2e91.gif)
 
 
 
 
 Edit / Delete
 
 ![business-edit-delete](https://user-images.githubusercontent.com/75706553/169227644-084f8716-919d-4efb-8842-48c5133ffd8d.gif)
 
 
 
 ### Reviews
 
 Create / Read
 
 ![review-create-read](https://user-images.githubusercontent.com/75706553/169233893-18770560-5d0b-4ffd-9e78-48091619034e.gif)
 
 
 
 Edit / Delete
 
 ![review-edit-delete](https://user-images.githubusercontent.com/75706553/169235944-212bb563-8510-47f9-b409-ef14144f7698.gif)
 
 ### Likes
 
 Create / Delete
 ![like-create-delete](https://user-images.githubusercontent.com/75706553/169240209-291e2854-2ed4-40fa-b1a9-eda9f9a704c7.gif)
 
 ### Search
 
 ![search](https://user-images.githubusercontent.com/75706553/169242855-ebf5e7f6-5939-48bf-a066-af9c03c2b9fd.gif)


# Installation
 Clone the repo
```
git clone https://github.com/brandonvicc/yelp-clone.git
```
Install dependencies from the root directory.
```
cd frontend > npm install
cd backend > npm install
```
Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
```
  CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
```
Create a .env file base on the .env.example given in the backend folder

Enter your username and password information into you .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, Google Maps Api MAPS_API_KEY and your desired PORT (preferably 5000).

Add the following proxy to your package.json file with your front end directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
```
  "proxy": "http://localhost:5000"
```
Create Database, Migrate, and Seed models.
```
  npx dotenv sequelize db:create
  npx dotenv sequelize db:migrate
  npx dotenv sequelize db:seed:all
```
Start the services in the back end directory.
```
  npm start
```
Start the services in the front end directory, which should open the project in your default broswer. If not naviagte to http://localhost:3000
```
  npm start
```
