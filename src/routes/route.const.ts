import ForgotPassword from 'pages/forgot-pasword/ForgotPassword';
import SignIn from 'pages/signin/SignIn';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps, Switch, useRouteMatch } from 'react-router-dom';

export const PUBLIC_ROUTE = [
    {
        path: '/sign-in',
        component: lazy(() => import('../pages/signin/SignIn')),
        exact: true,
    },
    {
        path: '/forgot-password',
        component: lazy(() => import('../pages/forgot-pasword/ForgotPassword')),
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
        path: '',
        component: lazy(() => import('../pages/home/Home')),
        exact: true,
    },
];