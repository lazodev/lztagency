import { GetServerSideProps } from 'next';
import axios from 'axios';
import PostsList from '../../components/PostsList';

interface Post {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Technology Posts</h1>
      <PostsList posts={posts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    return {
      props: {
        posts: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Blog;
