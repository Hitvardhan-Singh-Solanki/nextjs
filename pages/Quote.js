import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default (props) => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  const author = data?.author;
  let quote = data?.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return (
    <Layout>
      <main className="center">
        <div className="quote">{quote}</div>
        {author && <span className="author">- {author}</span>}

        <style jsx>{`
          main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
          }
          .quote {
            font-family: cursive;
            color: #e243de;
            font-size: 24px;
            padding-bottom: 10px;
          }
          .author {
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          }
        `}</style>
      </main>
    </Layout>
  );
};
