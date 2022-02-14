import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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