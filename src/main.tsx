import {createRoot} from 'react-dom/client';
import {restaurants} from '../materials/mock.ts';


const root = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(root);

reactRoot.render(
    <div className='restaurants'>
        <h1>Рестораны</h1>
        {restaurants.map((restaurant) => (
            <div className="restaurant">
                <h2 className='restaurant'>{restaurant.name}</h2>
                <h3>Меню</h3>
                <ul>
                    {restaurant.menu.map((item) => (
                        <li>{item.name}</li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {restaurant.reviews.map((review) => (
                        <li>{review.text}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);