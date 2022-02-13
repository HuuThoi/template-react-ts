import { Header, Sidebar } from 'components';
import { AppState } from 'my-redux/reducers';
import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';
import MainWrapper from 'styles/styled-components/main-wrapper';
import PageContentWrapper from 'styles/styled-components/page-content-wrapper';
// import { AppRouteProps } from './route.const';

interface AppRouteProps extends RouteProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: AppRouteProps) => {
    const { component: Component, ...rest } = props;
    const isAuthenticated = useSelector((state: AppState) => state.authenticationReducer.isAuthenticated);

    return (
        <Route
            render={(routeProps) =>
                isAuthenticated ? (
                    <MainWrapper>
                        <Sidebar {...props} />
                        <PageContentWrapper>
                            <Header/>
                            <Component {...routeProps} />
                        </PageContentWrapper>
                    </MainWrapper>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: routeProps.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;