import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownPage({ filePath }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [filePath]);

  return (
    <section className="container mx-auto px-4 py-16 prose prose-lg max-w-none">
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
    </section>
  );
}

export default MarkdownPage;
