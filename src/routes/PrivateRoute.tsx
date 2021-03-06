import { Header, Sidebar } from 'components';
import { useTheme } from 'contexts/themes/hookTheme';
import { AppState } from 'my-redux/reducers';
import * as React from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';
import {MainWrapper, PageContentWrapper} from 'styles/styled-components';
// import { AppRouteProps } from './route.const';

interface AppRouteProps extends RouteProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: AppRouteProps) => {
    const { component: Component, ...rest } = props;
    const isAuthenticated = useSelector((state: AppState) => state.authenticationReducer.isAuthenticated);

    const { theme } = useTheme();

    return (
        <Route
            render={(routeProps) =>
                isAuthenticated ? (
                    <MainWrapper theme={theme}>
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