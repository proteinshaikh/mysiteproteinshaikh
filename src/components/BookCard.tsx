import React from 'react';

type BookCardProps = {
    title: string;
    author: string;
    summary: string;
    reason: string;
    topics?: string[];
};

const BookCard: React.FC<BookCardProps> = ({
                                               title,
                                               author,
                                               summary,
                                               reason,
                                               topics = [],
                                           }) => {
    return (
        <div
            className="relative bg-white w-full max-w-sm mx-auto my-6 rounded-md shadow-lg border border-gray-200 overflow-hidden group transform transition-transform hover:scale-[1.015]">

            {/* Spine effect on left */}
            <div
                className="absolute top-0 left-0 h-full w-3 bg-gradient-to-b from-gray-300 to-gray-100 shadow-inner z-10"></div>

            {/* Content inside the 'book' */}
            <div className="pl-5 pr-6 pt-6 pb-5">

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {topics.map((topic, index) => (
                        <span
                            key={index}
                            className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
              {topic}
            </span>
                    ))}
                </div>

                {/* Title & Author */}
                <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
                <p className="text-sm italic text-gray-600 mb-3">by {author}</p>

                {/* Summary & Reason */}
                <div className="text-gray-700 text-sm space-y-2">
                    <p>
                        <span className="font-semibold">Quick Summary:</span> {summary}
                    </p>
                    <p>
                        <span className="font-semibold">Why Read It:</span> {reason}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
