import {useState} from 'react';

const MIN = 0;
const MAX = 5;

export const useCounter = () => {
    const [value, setValue] = useState(0);

    return {
        decrement: () => setValue(Math.max(value - 1, MIN)),
        increment: () => setValue(Math.min(value + 1, MAX)),
        value
    }
}