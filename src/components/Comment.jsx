import React from 'react';
import Marked from 'marked';

class Comment extends React.Component {
  rawMarkup() {
    let markup = Marked(this.props.children.toString(), { sanitize: true });
    return { __html: markup };
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
