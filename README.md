# Gubank
## Description
Project developed as a recruitment test at 4CADIA Factory.

The goal of the project is to develop a Single Page Application for an Open Banking, including an API with the following methods:
- Register
- Login
- Bank statement
- Balance

# How to run the app locally
1. Clone the repository using 'git clone'
2. Install the dependencies
  - `npm install`
3. Create the database 'gubank' in your local instance of MongoDB
  - `use gubank`
4. Populate the 'users' collection of this database using the mongodb cli. You can use the command in the file /backend/dev-data/insertUsers.js
5. Create a .env file with the variable MONGODB_URL containing the url of your instance of mongodb
6. Run the app
  - `npm start`
7. You may want to populate the transactions collection  with POST requests to the route "POST /api/transactions" and sending in the body of the request the transaction as in the file "/backend/dev-data/insertTransactions.json"

# What was developed
## Back-end
  A basic API with the following endpoints:
  - GET /api/users => to get all users
  - GET /api/users:id => to get an user by his ID
  - POST /api/users => signup route, to create user
  - GET /api/transactions => to get all transactions
  - GET /api/transactions?userId=613920df202008b80675de7a => To get all transactions of an especific user
  - POST /api/transactions => To create a new transaction
  - GET /api/users/613920df202008b80675de7a/balance => to get a specific users balance
  - POST /api/users/login => basic implementation of a login functionality (just checks if the password matches with the one stored in the DB)

  The main technologies used were NodeJS (w/ JavaScript) + Express connected to a local instance of MongoDB.

  I've tried to implement a basic MVC architecture, with each layer taking care of a very specific role. Model connects with database and queries it. Controller process requests and responses. Services holds business logic and connects controllers with services.


## Front-end
It was intended to develop a frontend with React + ContextAPI and connect it to the backend, but because of lack of time it was not posible to finish it on time.



# Evaluation
### How I'd like to be evaluated
I'd like to be evaluated considering programming logic, fluency with JavaScript/Node/MongoDB, creativity in solving problems and general architecture.

### Topics that I wish to exclude from evaluation
Due to time restrictions, it was not possible to implement and connect the front-end, testing and more advanced features like jwt authentication for login. So I'd like to keep it out of the evaluation process, if it's possible.