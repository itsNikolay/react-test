import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <div className="commentList">
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        </div>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
};

export default CommentList;
