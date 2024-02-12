# store-front-backend 

## About the project

Stackholders want to build an online store for some products available to be purchased. My role is to design a database schema, then build RESTful APIs for retrieving and providing information to the front end develpers.

## Libraries used in this project

* Runtime environment: Node.js.
* Back end framework: Express.js.
* Programming Language: Typescript.
* Database: PostgreSQL.
* Unit testing: Jasmine & Supertest.

## How to install project & dependencies

  To install the project and its dependencies, run `npm install`
  <br> To run the application in the development environment run, `npm run dev`
  <br> To run the application, run `npm start`
  <br> To compile typescript, run `npx tsc`
  <br> To run API tests, run `npm test`
  <br> To run formatting, run `npm run prettier`
  <br> To run linting and correcting code errors, run `npm run lint`

## How to connect to database

  1. Create the main database with name `store_dev`, then create another database for testing with name `store_test`.
  2. Connect to the database using the command `psql -U postgres`.
  3. Run the command `db-migrate up` for up-migrations and `db-migrate down` for down-migrations.
  
## Environmental variables

  There is list of environment variables located in `.env` for local configuration
  ```
  ENV=dev
  POSTGRES_HOST=127.0.0.1
  POSTGRES_DB=store_dev
  POSTGRES_TEST_DB=store_test
  POSTGRES_USER=postgres
  POSTGRES_PASSWORD=postgres
  BCRYPT_PASSWORD=your-secret-password
  SALT_ROUNDS=10
  TOKEN_SECRET=my-token-secret
  ```

## Running Ports

  After start up, the server will start on port `3000` and the database on port `5432`

## Endpoint Access

All endpoints are described in the [REQUIREMENTS.md](REQUIREMENTS.md) file.
