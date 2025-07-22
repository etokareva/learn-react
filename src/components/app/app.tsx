import {restaurants} from '../../../materials/mock.ts';
import {Restaurants} from '../../pages/restaurants/restaurants.tsx';
import {Layout} from '../layout/layout.tsx';
import './reset.css';

export const App = () => {
    return (
        <Layout>
            <Restaurants restaurants={restaurants} title="Рестораны"/>
        </Layout>
    )
}