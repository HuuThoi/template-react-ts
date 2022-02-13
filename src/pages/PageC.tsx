import * as React from 'react';
import axios from 'axios';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { login } from 'my-redux/action-creators/authentication.action-creator';
import { connect, useSelector } from 'react-redux';
import { AppState } from 'my-redux';

const PageC = () => {
    return (
        <div className="">
        Page C
        </div>
    )
}

export default PageC;