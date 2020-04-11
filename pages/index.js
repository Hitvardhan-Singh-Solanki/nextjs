import Link from 'next/link';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';

const getPosts = () => {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
};

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: #80deea;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 20);
  }, []);

  return (
    <Layout>
      {showSpinner ? (
        <Spinner animation="grow" />
      ) : (
        <div className="main-container">
          <p className="display-4 bold">My Blog</p>
          <ul>
            {getPosts().map((post) => (
              <PostLink key={post.id} post={post} />
            ))}
          </ul>
          <style jsx>{`
            ul {
              padding: 0;
            }
            .main-container {
              position: relative;
              display: flex;
              flex-flow: column;
              align-items: center;
              justify-content: center;
              color: #fff;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
            }
            .bold {
              font-weight: 400;
            }
            .bold::before {
              content: '';
              background-color: red;
            }
          `}</style>
        </div>
      )}
    </Layout>
  );
};
