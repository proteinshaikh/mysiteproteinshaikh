import React, { useState, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import books, { Book } from '../data/books';

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
                {/* spine */}
                <div className="shrink-0 w-12 h-16 rounded-lg bg-gradient-to-b from-indigo-400 to-purple-500 flex items-center justify-center text-2xl shadow-sm">
                    {book.cover}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 leading-snug">{book.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{book.author}</p>
                        </div>
                        {book.status === 'reading' && (
                            <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-semibold uppercase tracking-wide">
                                Reading
                            </span>
                        )}
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

export default function BooksPage(): JSX.Element {
    const [filter, setFilter] = useState<'all' | 'reading' | 'read'>('all');
    const reading = books.filter(b => b.status === 'reading');
    const read = books.filter(b => b.status === 'read');
    const filtered = filter === 'all' ? books : books.filter(b => b.status === filter);

    return (
        <>
            <Helmet><title>Bookshelf · Zeeshan Shaikh</title></Helmet>

            {/* Header banner */}
            <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-indigo-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Bookshelf</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">What I'm reading</h1>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl">
                            Books shape how I think about code, money, and life. Here's my shelf —
                            click any card to read a summary.
                        </p>

                        {/* counts */}
                        <div className="flex gap-4 mt-5">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"/>
                                <span className="text-sm text-gray-500">{reading.length} currently reading</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block"/>
                                <span className="text-sm text-gray-500">{read.length} finished</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-1 p-1 bg-indigo-50 rounded-xl w-fit mb-8"
                >
                    {(['all', 'reading', 'read'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                                filter === f
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            {f === 'all' ? `All (${books.length})` : f === 'reading' ? `Reading (${reading.length})` : `Read (${read.length})`}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((book, i) => (
                            <BookCard key={book.title} book={book} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
}
