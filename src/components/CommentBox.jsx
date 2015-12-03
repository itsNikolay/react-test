import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import {data} from './data';

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({data: data});
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
};
