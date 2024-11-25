import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

interface Post {
  title: string;
  content: string;
  urlToImage: string;
  publishedAt: string;
}

interface PostProps {
  post: Post | null;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.urlToImage && (
        <img src={post.urlToImage} alt={post.title} className="w-full h-64 object-cover mb-4" />
      )}
      <p className="text-gray-700">{post.content}</p>
      <p className="text-gray-500 text-sm mt-4">
        Published on {new Date(post.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  if (!params || typeof params.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const slug = params.slug;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${slug}`);
    return {
      props: {
        post: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        post: null,
      },
    };
  }
};

export default PostPage;
