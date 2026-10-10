import React from 'react';
import { Routes, Route, Navigate, useLocation, HashRouter } from 'react-router-dom';
import TabsMenu from './components/TabsMenu';
import About from './pages/About';
import Counters from './pages/Counters';
import NotFound from './pages/NotFound';

const App = () => {
    const location = useLocation();

    const showTabs = location.pathname === '/'
        || location.pathname === '/about'
        || location.pathname === '/counters';

    return (
        <>
            {showTabs && <TabsMenu />}
            <HashRouter>
              <Routes>
                  <Route path="/" element={<></>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/counters" element={<Counters />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </HashRouter>
        </>
    );
};

export default App;
