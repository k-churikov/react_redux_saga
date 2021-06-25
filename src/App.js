import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';

function App() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col">
          <PostsForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
