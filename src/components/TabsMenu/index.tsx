import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const TabsMenu = () => {
    const location = useLocation();

    const currentTab = location.pathname === '/about' ? 0 
    : location.pathname === '/counters' ? 1
    : location.pathname === '/login' ? 2
    : false;

    return (
        <Tabs value={currentTab} centered>
            <Tab label="О нас" component={Link} to="/about" />
            <Tab label="Счётчики" component={Link} to="/counters" />
            <Tab label="Войти" component={Link} to="/login" />
        </Tabs>
    );
};

export default TabsMenu;