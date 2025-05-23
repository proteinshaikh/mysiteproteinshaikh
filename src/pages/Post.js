import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../utils/loadPosts';
import ReactMarkdown from 'react-markdown';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{post.date}</p>
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

export default Post;
