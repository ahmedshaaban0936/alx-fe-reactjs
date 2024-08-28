// src/components/Blog.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>Content for blog post {postId}</p>
    </div>
  );
};

export default Blog;
