import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = { author: '', text: '' };
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) { return; }
    this.props.onCommentSubmit({ author: author, text: text })
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          placeholder="Say Something"
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default CommentForm;
