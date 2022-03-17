import { lazy } from 'react';

export const PUBLIC_ROUTE = [
    {
        path: '/sign-in',
        component: lazy(() => import('../pages/signin/SignIn')),
        exact: true,
    },
    {
        path: '/forgot-password',
        component: lazy(() => import('../pages/forgot-password/ForgotPassword')),
        exact: true

    },
];

export const AUTH_ROUTE = [
    {
        path: '/users',
        component: lazy(() => import('../pages/users/User')),
    },

    {
        path: '/page-b',
        component: lazy(() => import('../pages/PageB')),
    },
    {
        path: '/settings',
        component: lazy(() => import('../pages/settings/Setting')),
    },
    {
        path: '/spaceships',
        component: lazy(() => import('../pages/spaceships')),
    },
    {
        path: '',
        component: lazy(() => import('../pages/home/Home')),
        exact: true,
    },
];