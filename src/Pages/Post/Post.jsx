import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import ArticlePost from './ArticlePost';
import VideoPost from './VideoPost';

const Post = () => {
  return (
    <Switch>
      <Route path="/post/video/:id" component={VideoPost} />
      <Route path="/post/article/:id" component={ArticlePost} />
    </Switch>
  )
}

export default Post;