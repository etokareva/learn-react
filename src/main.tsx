import {createRoot} from 'react-dom/client';
import {restaurants} from '../materials/mock.ts';
import {App} from './components/app/App.tsx';


const root = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(root);

reactRoot.render(<App restaurants={restaurants} title='Рестораны' />);