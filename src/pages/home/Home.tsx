
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from 'contexts/themes/hookTheme';
import { ThemeContext } from 'contexts/themes/ThemeContext';
import { ThemeConsumer } from 'contexts/themes/ThemConsumer';
import Sidebar from '../../components/headers/Header';

export default class Home extends React.Component<RouteComponentProps> {
    // static contextType = ThemeContext;

    constructor(props: RouteComponentProps) {
        super(props);
    }

    public render() {
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

                {/* render sidebar temporality for checking css */}
            </div>
        )
    }
}