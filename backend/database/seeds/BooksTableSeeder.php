<?php

use App\Models\Book;
use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::truncate();
        $csv = array_map('str_getcsv', file(database_path('csv/books.csv')));
        for ($i = 1; $i < count($csv); $i++) {
            $row = $csv[$i];
            Book::create([
                'title' => $row[0],
                'author' => $row[1],
                'price' => $row[2],
                'category' => $row[3],
                'year' => $row[4],
                'image_filename' => $row[5],
                'description' => $row[6]
            ]);
        }
    }
}
