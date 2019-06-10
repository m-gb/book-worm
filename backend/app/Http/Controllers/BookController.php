<?php

namespace App\Http\Controllers;

use App\Models\Book;

class BookController extends Controller
{
    public function index() {
        return Book::all();
    }

    public function show(Book $book) {
        return $book;
    }
}
