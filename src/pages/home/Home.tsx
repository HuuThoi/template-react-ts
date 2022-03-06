
import { stat } from 'fs';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IState {
    counter: number;
}
export default class Home extends React.Component<RouteComponentProps, IState> {
    // static contextType = ThemeContext;

    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    public countUntilDoom = () => {
       this.setState({ counter: 2 })
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

                {/* error boundaries */}
            </div>
        )
    }
}