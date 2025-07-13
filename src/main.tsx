import {createRoot} from 'react-dom/client';
import {App} from './components/app/app.tsx';


const root = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(root);

reactRoot.render(<App/>);