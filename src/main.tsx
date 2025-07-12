import {createRoot} from 'react-dom/client';

const root = document.getElementById('root') as HTMLElement;

const reactRoot = createRoot(root);

console.log(reactRoot);