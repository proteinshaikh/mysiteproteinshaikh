import React, { useState, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import books, { CATEGORIES, Category, Book } from '../data/books';

function BookCard({ book, index }: { book: Book; index: number }): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            whileHover={{ y: -3 }}
            onClick={() => setOpen(o => !o)}
            className="cursor-pointer bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
        >
            <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-16 rounded-lg bg-gradient-to-b from-indigo-400 to-purple-500 flex items-center justify-center text-2xl shadow-sm">
                    {book.cover}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 leading-snug">{book.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{book.author}</p>
                        </div>

                    </div>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <p className="text-xs text-gray-500 mt-3 leading-relaxed">{book.summary}</p>
                                <p className="text-xs text-indigo-500 mt-2 font-medium">💡 {book.reason}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="text-[10px] text-gray-300 mt-2 select-none">
                        {open ? 'Click to collapse ↑' : 'Click to expand ↓'}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

const CATEGORY_META: Record<Category, { emoji: string; desc: string }> = {
    'Science & Philosophy': { emoji: '🔭', desc: 'Evolution, reason, and the cosmos' },
    'History & Politics':   { emoji: '🏛️', desc: 'Civilisations, empires, and ideas that shaped the world' },
    'Investing & Money':    { emoji: '📈', desc: 'Wealth, markets, and long-term thinking' },
    'Biography':            { emoji: '🧭', desc: 'Lives worth studying' },
    'Fiction':              { emoji: '📚', desc: 'Stories that stay with you' },
};

export default function BooksPage(): JSX.Element {
    const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
    const categoriesToShow = activeCategory === 'all' ? CATEGORIES : [activeCategory];

    return (
        <>
            <Helmet><title>Bookshelf · Zeeshan Shaikh</title></Helmet>

            {/* Header */}
            <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-indigo-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Bookshelf</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">What I read</h1>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl">
                            Books are how I think. Across science, history, money, and the occasional story that breaks something open.
                            Click any card to read a summary.
                        </p>

                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                            activeCategory === 'all'
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                        }`}
                    >
                        All ({books.length})
                    </button>
                    {CATEGORIES.map(cat => {
                        const count = books.filter(b => b.category === cat).length;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                                    activeCategory === cat
                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                                }`}
                            >
                                {CATEGORY_META[cat].emoji} {cat} ({count})
                            </button>
                        );
                    })}
                </motion.div>

                {/* Sections */}
                <div className="space-y-14">
                    {categoriesToShow.map(cat => {
                        const catBooks = books.filter(b => b.category === cat);
                        return (
                            <section key={cat}>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{CATEGORY_META[cat].emoji}</span>
                                    <div>
                                        <h2 className="text-base font-bold text-gray-900">{cat}</h2>
                                        <p className="text-xs text-gray-400">{CATEGORY_META[cat].desc}</p>
                                    </div>
                                    <span className="ml-auto text-xs text-gray-300 font-medium">{catBooks.length} books</span>
                                </div>
                                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <AnimatePresence mode="popLayout">
                                        {catBooks.map((book, i) => (
                                            <BookCard key={book.title} book={book} index={i} />
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
