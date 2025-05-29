import React from 'react';
import { Helmet } from 'react-helmet';
import BookCard from '../../components/BookCard'; // adjust path based on actual location
import books from '../../data/books';

function Books() {
    return (
        <>
            <Helmet>
                <title>Best Books of 2025 | ProteinShaikh</title>
            </Helmet>
            <section className="prose prose-lg max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">📚 Best Books of 2025</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Discover a curated selection of must-read books for 2025.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book, index) => (
                        <BookCard key={index} {...book} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Books;
