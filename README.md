# Book Worm :books:
## Description
This web application is an ongoing project for an online book store called Book Worm.

It's designed as a microservice:
- using a PHP Laravel backend API to retrieve the books from a MySQL database. 
- using an Angular frontend written with Typescript and Bootstrap to display the books.

The search function uses a pipe to dynamically display a list of books matching the user's input.

## Development
In order to run the web application, you will need to have two separate tabs in the terminal:

- Install and run MySQL
- Configure and run the backend:
    - Install the dependencies:
    ```bash
    book-worm/backend $ composer install
    ```
    - Populate the database:
    ```bash
    book-worm/backend $ php artisan db:seed
    ```
    - Run the API:
    ```bash
    book-worm/backend $ php artisan serve
    ```
    - (Optional) Go to http://localhost:8000/api/books
- Configure and run the frontend:
    - Install the dependencies:
    ```bash
    book-worm/frontend $ npm install
    ```
    - Run the website:
    ```bash
    book-worm/frontend $ ng serve
    ```
    - Go to http://localhost:4200
