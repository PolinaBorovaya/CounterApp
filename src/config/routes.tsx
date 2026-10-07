import React from 'react';
import About from '../pages/About';
import Counters from '../pages/Counters';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import LoginRedux from '../pages/LoginRedux';
import LoginReduxSuccess from '../pages/LoginRedux/Success';
import LoginFormik from '../pages/LoginFormik';
import LoginFormikSuccess from '../pages/LoginFormik/Success';

export interface RouteConfig {
    path: string;
    label: string;
    element: React.ReactElement;
    showInMenu: boolean;
}

export const routes: RouteConfig[] = [
    { path: '/about', label: 'О нас', element: <About />, showInMenu: true },
    { path: '/counters', label: 'Счётчики', element: <Counters />, showInMenu: true },
    { path: '/login', label: 'Войти', element: <Login />, showInMenu: true },
    { path: '/login-redux', label: 'Войти с Redux', element: <LoginRedux />, showInMenu: true },
    { path: '/login-redux/success', label: 'Успех', element: <LoginReduxSuccess />, showInMenu: false },
    { path: '/login-formik', label: 'Войти с Formik', element: <LoginFormik />, showInMenu: true },
    { path: '/login-formik/success', label: 'Успех', element: <LoginFormikSuccess />, showInMenu: false },
    { path: '/404', label: '404', element: <NotFound />, showInMenu: false },
];