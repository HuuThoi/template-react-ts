import { AppState } from 'my-redux/reducers';
import * as React from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';
// import { AppRouteProps } from './route.const';

interface AppRouteProps extends RouteProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

const PublicRoute = (props: AppRouteProps) => {
    const { component: Component, ...rest } = props;
    const isAuthenticated = useSelector((state: AppState) => state.authenticationReducer.isAuthenticated);

    return (
        <Route
            {...rest}
            render={(routeProps) => (
                !isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: routeProps.location }
                        }}
                    />
                )
            )}
        />
    );
}

export default PublicRoute;