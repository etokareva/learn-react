import {useState} from 'react';
import {Counter} from '../components/counter/counter.tsx';

const MIN = 0;
const MAX = 5;

export const DishCounter = () => {
    const [value, setValue] = useState(0);

    const increment = () => setValue(Math.min(value + 1, MAX));
    const decrement = () => setValue(Math.max(value - 1, MIN));

    return (
        <Counter value={value}
                 onIncrement={increment}
                 onDecrement={decrement}
        />
    );
};