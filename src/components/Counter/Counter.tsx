import {useCounter} from './hooks.ts';

export const Counter = () => {
    const {increment, decrement, value} = useCounter();

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}