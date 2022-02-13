import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ForgotPassword extends React.Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
    }

  public render() {
      return (
          <div>
              ForgotPassword
            </div>
      )
  }

}
export default ForgotPassword;