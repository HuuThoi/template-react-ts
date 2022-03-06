import React from "react";

interface IState {
  error: { message: string, stack: string };
  errorInfo: { componentStack: string };
  hasError: boolean;
}

export class ErrorBoundaryClassComponent extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: { message: "", stack: "" },
      errorInfo: { componentStack: '' },
      hasError: false,
    };
  }

  static getDerivedStateFromError = (error: any, errorInfo: any) => {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    console.log(error, errorInfo, hasError);
    if (hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <p>
              There was an error in loading this page.{' '}
              <span
                style={{ cursor: 'pointer', color: '#0077FF' }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </span>{' '}
            </p>
          </div>
          <div className="card-body">
            <details className="error-details">
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}