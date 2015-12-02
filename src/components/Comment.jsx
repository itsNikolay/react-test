import React from 'react';
import Marked from 'marked';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {Marked(this.props.children.toString())}
      </div>
    );
  }
}
