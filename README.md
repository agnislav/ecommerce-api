# REST API for e-commerce

## The purpose
Design and implement common e-commerce RESTful API.

## Technology stack
- NodeJS
- ExpressJS
- MongoDB

## Installation
Before installing make sure you have node and Mongo installed

1. Clone the repository
1. Install dependencies: `cd ecommerce-api && npm install`
1. Create a 'data' folder under 'ecommerce-api' and use it as your mongo db: `mongod --dbpath path\to\ecommerce-api\data`
1. Start the app: `npm start`
1. Fill the db: open 'http://localhost:3000/manage/db/flush' in your browser