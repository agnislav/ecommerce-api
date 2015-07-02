# LightCom

## The purpose
Design and implement light and fast ecommerce solution framework. See details in [my blog](http://blog.agnislav.name/search/label/lightcom)

## Technology stack
- NodeJS
- ExpressJS
- MongoDB

## Installation
Before installing make sure you have node and Mongo installed

1. Clone this repository: `git clone https://github.com/agnislav/lightcom.git`
1. Clone API repository: `git clone https://github.com/agnislav/lightcom-api.git`
1. Cloned repositories should be placed within the same directory
1. Install dependencies: `cd lightcom-api && npm install && cd ../lightcom && npm install`
1. Start the app: `npm start`
1. Fill the db: open 'http://localhost:3000/manage/db/flush' in your browser