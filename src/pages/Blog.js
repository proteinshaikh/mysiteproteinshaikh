import React from 'react';
import {getAllPosts} from '../utils/loadPosts';
import BlogPost from '../components/BlogPost';
import {Helmet} from 'react-helmet';

function Blog() {
    const posts = getAllPosts();

    return (
        <>
            <Helmet>
                <title>Blog | ProteinShaikh</title>
            </Helmet>
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Blog</h2>
                <div className="space-y-6">
                    {posts.map((post, idx) => (
                        <BlogPost
                            key={idx}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            slug={post.slug}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Blog;
