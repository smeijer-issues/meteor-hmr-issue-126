import React, { PropTypes } from 'react';
import Redbox from 'redbox-react';

const ErrorReporter = ({ error }) => {
  /* eslint no-console: ["error", { allow: ["error"] }] */
  console.error(error);
  return <Redbox error={error} />;
};

ErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default ErrorReporter;
