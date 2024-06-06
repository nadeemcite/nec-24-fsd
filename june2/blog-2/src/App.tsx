import React from 'react';
import './App.css';
import {PostList} from './PostList'
import {Post} from './Post'
import {Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Container>
        <Link to="/">
          <h1>Blog Site</h1>
        </Link>
      
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/b" element={<>B</>}></Route>
      </Routes>
      
      </Container>
      
    </div>
  );
}

export default App;
