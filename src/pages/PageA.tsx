import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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