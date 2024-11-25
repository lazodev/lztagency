import React from 'react';

interface Post {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <div key={index} className="border rounded-lg p-4">
          {post.urlToImage && (
            <img src={post.urlToImage} alt={post.title} className="w-full h-48 object-cover mb-4" />
          )}
          <h2 className="text-xl font-bold mb-2">
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </h2>
          <p className="text-gray-700 mb-2">{post.description}</p>
          <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
