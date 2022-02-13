import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

class PageB extends React.Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
    }

    public render() {
        return (
            <div className="">
                Page B
            </div>
        )
    }
}
export default PageB;