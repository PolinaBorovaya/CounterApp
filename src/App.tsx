import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TabsMenu from './components/TabsMenu';
import About from './pages/About';
import Counters from './pages/Counters';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
    const location = useLocation();

    const showTabs = location.pathname === '/'
        || location.pathname === '/about'
        || location.pathname === '/counters'
        || location.pathname === '/login';

    return (
        <>
            {showTabs && <TabsMenu />}

            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/about" element={<About />} />
                <Route path="/counters" element={<Counters />} />
                <Route path="/login" element={<Login />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </>
    );
};

export default App;
