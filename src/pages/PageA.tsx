import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class PageA extends React.Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
    }

  public render() {
      return (
          <div className="">
              Page A
            </div>
      )
  }

}
export default PageA