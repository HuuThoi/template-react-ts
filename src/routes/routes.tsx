import { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AUTH_ROUTE, PUBLIC_ROUTE } from "./route.const"

export function AppRouter() {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Switch>
                    {PUBLIC_ROUTE.map((route, index) => {
                        return (
                            <PublicRoute key={index} {...route} />
                        );
                    })}

                    {AUTH_ROUTE.map((route, index) => {
                        return (
                            <PrivateRoute key={index} {...route} />
                        );
                    })}

                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}