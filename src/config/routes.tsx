import React from 'react';
import About from '../pages/About';
import Counters from '../pages/Counters';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

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
    { path: '/404', label: '404', element: <NotFound />, showInMenu: false },
];