import React from 'react';
import {Link} from 'react-router';

const ArticleTile = (props) => {
  return(
    <ul className="article-tile">
      <a href={`/articles/${props.id}`}>
        <h5>{props.title}</h5>
        <h6>{props.body}</h6>
      </a>
      <hr/>
    </ul>
  );
};

export default ArticleTile;
