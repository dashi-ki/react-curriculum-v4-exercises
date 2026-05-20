import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    setPost(null);
    const randomId = Math.floor(Math.random() * 10) + 1;
    getSinglePost(randomId).then((data) => {
      setTimeout(() => {
        setPost(data);
        setIsLoading(false);
      }, 1000);
    });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        {isLoading && <p>Loading...</p>}
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <p>Click the button to fetch a post.</p>
        )}
      </div>
    </div>
  );
}
