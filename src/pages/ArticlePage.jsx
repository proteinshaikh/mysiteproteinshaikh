import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Add this for tables
import '../styles/markdown.css'; // Ensure this has .markdown-table styling

function ArticlePage() {
  const { slug } = useParams();
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    import(`../articles/${slug}.md`)
      .then(res => fetch(res.default).then(r => r.text()).then(setContent))
      .catch(() => setContent('# Article not found'));
  }, [slug]);

  return (
    <div className="prose mx-auto px-4 py-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => (
            <table className="markdown-table" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ArticlePage;
