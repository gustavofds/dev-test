# Gubank
## Description
Project developed as a recruitment test at 4CADIA Factory.

The goal of the project is to develop a Single Page Application for an Open Banking, including an API with the following methods:
- Register
- Login
- Bank statement
- Balance

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
  - POST /api/users/login => basic implementation of login functionality

  The main technologies used were NodeJS (w/ JavaScript) + Express connected to a local instance of MongoDB.

  I've tried to implement a basic MVC architecture, with each layer taking care of a very specific role. Model connects with database and queries it. Controller process requests and responses. Services holds business logic and connects controllers with services.


## Front-end




# Evaluation
### How I'd like to be evaluated
I'd like to be evaluated considering programming logic, fluency with JavaScript/Node/MongoDB and general architecture.

### Topics that I wish to exclude from evaluation
Due to time restrictions, it was not possible to implement testing, more advance web design in the frontend and jwt authentication.