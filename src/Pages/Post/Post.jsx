import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import ArticlePost from './ArticlePost';
import VideoPost from './VideoPost';

const Post = (props) => {
  const { type } = props;
  let { path, url } = useRouteMatch();
  const params = new URLSearchParams(props.location.search);
  const _id = params.get('id');
  console.log(path)

  return (
    <Switch>
      <Route path="/post/video/:id" component={VideoPost} />
      <Route path="/post/article/:id" component={ArticlePost} />
    </Switch>
  )
}

export default Post;