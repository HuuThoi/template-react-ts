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
        path: '/page-a',
        component: lazy(() => import('../pages/PageA')),
    },

    {
        path: '/page-b',
        component: lazy(() => import('../pages/PageB')),
    },
    {
        path: '/page-c',
        component: lazy(() => import('../pages/PageC')),
    },
    {
        path: '/settings',
        component: lazy(() => import('../pages/settings/Setting')),
    },
    {
        path: '',
        component: lazy(() => import('../pages/home/Home')),
        exact: true,
    },
];