import React from 'react';

function ArticleCard({title, excerpt, link}) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <a href={link} className="text-blue-500 hover:underline">Read more</a>
        </div>
    );
}

export default ArticleCard;
