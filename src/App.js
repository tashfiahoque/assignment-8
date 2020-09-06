import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostsShow from './components/PostsShow/PostsShow';
import SinglePost from './components/SinglePost/SinglePost';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/posts">
            <PostsShow />
          </Route>
          <Route path="/post/:postId">
            <SinglePost />
          </Route>
          <Route exact path="/">
            <PostsShow />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
