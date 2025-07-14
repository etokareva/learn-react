import {createRoot} from 'react-dom/client';
import {restaurants} from '../materials/mock.ts';


const root = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(root);

reactRoot.render(
    <div className='restaurants'>
        <h1>Рестораны</h1>
        {restaurants.map(({id, name, menu, reviews}) => (
            <div className="restaurant" key={id}>
                <h2 className='restaurant'>{name}</h2>
                <h3>Меню</h3>
                <ul>
                    {menu.map(({name}) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {reviews.map(({text}) => (
                        <li key={text}>{text}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);