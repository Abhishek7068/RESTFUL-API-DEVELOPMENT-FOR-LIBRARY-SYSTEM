# RESTFUL API DEVELOPMENT

*COMPANY NAME*: CODDETECH IT SOLUTIONS

*NAME*: ABHISHEK MAURYA

*INTERN ID*: CT08NCA

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATION*: 1 MONTHS

*MENTOR*: NEELA SANTOSH

## DESCRIPTIONS
A Library RESTful API is essential for managing books in a digital library system. This API allows users to add, retrieve, update, and delete books from the database using HTTP requests. It is built using JavaScript (Node.js and Express.js) with MongoDB, a NoSQL database that stores book details in a structured yet flexible manner.

This guide explains how the API is structured, how it connects to MongoDB, and how it handles CRUD (Create, Read, Update, Delete) operations for books. Postman can be used to test the API’s endpoints and verify its functionality.

### Technology Stack
1. Node.js – A JavaScript runtime for backend development.
2. Express.js – A lightweight web framework for handling API routes and requests.
3. MongoDB – A NoSQL database that efficiently stores book records.
4. Mongoose – An ODM (Object Data Modeling) library for MongoDB, simplifying database interactions.
5. Postman – A tool used for API testing, allowing developers to send requests and view responses.
6. Body-parser & CORS – Middleware for handling JSON data and cross-origin requests.

### Setting Up the Project
1. Initialize a Node.js project:
    npm init -y
2. Install required dependencies:
   npm install express mongoose dotenv body-parser cors
3. Set up the server (server.js).

### Database Connection (config/db.js)
The application connects to MongoDB using Mongoose. This ensures that our API can interact with the MongoDB database running locally.

### Defining the Book Schema (models/book.js)
The Book schema defines the structure of the book documents stored in MongoDB: Each book has a title, author, ISBN (unique identifier), publication date, and number of copies.

### API Routes (routes/bookRoutes.js)
This API supports CRUD operations on books.

1. Create a New Book (POST /api/books): Adds a new book to the database.
    #### Postman Test
        Method: POST
        URL: http://localhost:3000/api/books
        Body (JSON):
                    {
                      "title": "The Great Gatsby",
                      "author": "F. Scott Fitzgerald",
                      "isbn": "9780743273565",
                      "publishedDate": "1925-04-10",
                      "copies": 5
                    }
2. Get All Books (GET /api/books): Fetches a list of all books in the library.
   #### Postman Test
      Method: GET
      URL: http://localhost:3000/api/books
3. Get a Single Book by ID (GET /api/books/:id): Fetches details of a specific book by its MongoDB ID.
   #### Postman Test
      Method: GET
      URL: http://localhost:3000/api/books/{book_id}
4. Update a Book (PUT /api/books/:id): Modifies book details.
   #### Postman Test
      Method: PUT
      URL: http://localhost:3000/api/books/{book_id}
      Body (JSON):
                  {
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "copies": 10
                  }
5. Delete a Book (DELETE /api/books/:id): Removes a book from the library.
   #### Postman Test
        Method: DELETE
        URL: http://localhost:3000/api/books/{book_id}
### Conclusion
This Library RESTful API efficiently manages book records using Express.js, MongoDB, and Mongoose. It supports full CRUD operations, enabling users to add, retrieve, update, and delete books. With Postman, developers can test API endpoints before integrating them into a frontend application.

This API can be expanded further by adding authentication, pagination, search filters, and user roles to enhance security and usability.

## OUTPUT


