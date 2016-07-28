import React, { PropTypes } from 'react';

const noop = () => null;

export default ({ content = noop }) => (
  <div>
    <h1>simple layout</h1>
    <hr />
    {content()}
  </div>
);

