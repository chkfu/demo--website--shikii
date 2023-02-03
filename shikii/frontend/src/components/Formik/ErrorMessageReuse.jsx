import React from 'react';
import { ErrorMessage } from 'formik';

const ErrorMsgStyle = {
  position: 'absolute', fontSize: '14px', textAlign: 'left', color: 'red'
};

function ErrorMessageReuse({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <div style={ErrorMsgStyle}>{message}</div>} />
  );
}

export default ErrorMessageReuse;
