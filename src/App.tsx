import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TabsMenu from './components/TabsMenu';
import { routes } from './config/routes';

const App = () => {
    const location = useLocation();

    const menuPaths = routes.filter((r) => r.showInMenu).map((r) => r.path);
    const showTabs = location.pathname === '/' || menuPaths.includes(location.pathname);

    return (
        <>
            {showTabs && <TabsMenu />}

            <Routes>
                <Route path="/" element={<></>} />
                {routes.map((r) => (
                    <Route key={r.path} path={r.path} element={r.element} />
                ))}
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </>
    );
};

export default App;
