# LightCom

## The purpose
Design and implement light and fast ecommerce solution framework. See details in [my blog](http://blog.agnislav.name/search/label/pet)

## Technology stack
- NodeJS
- ExpressJS
- MongoDB

## Installation
Before installing make sure you have node and Mongo installed

1. Clone the repository: `git clone https://github.com/agnislav/lightcom.git`
1. Install dependencies: `cd lightcom && npm install`
1. Create a 'data' folder under 'lightcom' and use it as your mongo db: `mongod --dbpath path\to\lightcom\data`
1. Start the app: `npm start`
1. Fill the db: open 'http://localhost:3000/manage/db/flush' in your browser