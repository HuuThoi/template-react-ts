
import ModalPortal from 'components/portals/ModalPortal';
import { stat } from 'fs';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IState {
    open: boolean;
}
export default class Home extends React.Component<RouteComponentProps, IState> {
    // static contextType = ThemeContext;

    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            open: false
        }
    }

    public toggleModal = () => {
        this.setState({ open: !this.state.open })
    }

    public render() {
        // if(this.state.counter>1){
        //     throw Error("error!");
        // }
        return (
            <div className="">
                Home
                {/* cachs 1 dungf context */}
                {/* {this.context.theme} */}

                {/* cachs 2 dung context */}
                {/* <ThemeConsumer>
                    {(props) => {
                        return <div>{props.theme}</div>
                    }}
                </ThemeConsumer> */}

                {/* begin test portal */}
                <div className="component">
                    <button onClick={this.toggleModal}>Open Modal</button>
                    <ModalPortal
                        message="Hello World!"
                        isOpen={this.state.open}
                        onClose={this.toggleModal}
                    />

                    {/* end test portal */}
                </div>

            </div>
        )
    }
}