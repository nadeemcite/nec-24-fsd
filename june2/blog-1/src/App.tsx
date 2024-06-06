import React from 'react';
import './App.css';
import {PostList} from './PostList'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container>
      <h1>Blogs</h1>
      <PostList />
      </Container>
      
    </div>
  );
}

export default App;
