import posts from '../data/Posts.json';

export function getAllPosts() {
    return posts;
}

export async function getPostBySlug(slug) {
    const res = await fetch(`${process.env.PUBLIC_URL}/blog/${slug}.md`);
    const content = await res.text();
    const post = posts.find(p => p.slug === slug);
    return {
        ...post,
        content
    };
}
