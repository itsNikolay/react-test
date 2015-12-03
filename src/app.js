import React from 'react';
import ReactDOM from 'react-dom';
import {data} from './components/data';

import CommentBox from './components/CommentBox.jsx';

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
