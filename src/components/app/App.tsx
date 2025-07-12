import {restaurants} from '../../../materials/mock.ts';
import {RestaurantPage} from '../../pages/restaurant/RestaurantPage.tsx';
import {Layout} from '../layout/Layout.tsx';

export const App = () => {
    return (
        <Layout>
            <RestaurantPage restaurants={restaurants} title="Рестораны"/>
        </Layout>
    )
}