import React from 'react';
import {Link} from 'react-router-dom';

// Define prop types
type ArticleCardProps = {
    title: string;
    excerpt: string;
    link: string;
};

function ArticleCard({title, excerpt, link}: ArticleCardProps) {
    return (
        <Link
            to={link}
            className="block border rounded p-4 shadow hover:shadow-lg transition bg-white hover:bg-gray-50"
            aria-label={`Read more about ${title}`}
        >
            <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>
            <p className="text-gray-600">{excerpt}</p>
        </Link>
    );
}

export default ArticleCard;
