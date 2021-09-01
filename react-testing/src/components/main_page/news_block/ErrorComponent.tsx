import React from 'react';
import { NewsError } from '../../../model/News';

export interface ErrorComponentProps {
  error: NewsError
}

export default function ErrorComponent(errorComponentProps: ErrorComponentProps): JSX.Element {
  return <div className="error-wrapper">
    <div data-testid="error_status" className="error-h">Error status : {errorComponentProps.error.code}</div>
    <div className="error-message">{errorComponentProps.error.message}</div>
  </div>
}