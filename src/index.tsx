import '@progress/kendo-theme-default/dist/all.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);