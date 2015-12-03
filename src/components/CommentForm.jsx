import React from 'react';

export default class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = { author: '', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          placeholder="Say Something"
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
