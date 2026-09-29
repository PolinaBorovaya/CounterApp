import '@progress/kendo-theme-default/dist/all.css';
import * as _ from 'lodash';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if(!container){
    throw new Error('Root element not found (null)');
}
const root = createRoot(container);
root.render(<App />);