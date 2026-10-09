import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../config/routes';

const TabsMenu = () => {
    const location = useLocation();
    const menuRoutes = routes.filter((r) => r.showInMenu);

    const currentTab = menuRoutes.findIndex((r) => r.path === location.pathname);

    return (
        <Tabs value={currentTab === -1 ? false : currentTab} centered>
            {menuRoutes.map((r) => (
                <Tab key={r.path} label={r.label} component={Link} to={r.path} />
            ))}
        </Tabs>
    );
};

export default TabsMenu;