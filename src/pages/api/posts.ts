import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { NEXT_PUBLIC_NEWS_API_KEY } = process.env;

  if (!NEXT_PUBLIC_NEWS_API_KEY) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'technology',
        apiKey: NEXT_PUBLIC_NEWS_API_KEY,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 10,
      },
    });

    res.status(200).json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

export default handler;
