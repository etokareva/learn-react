type CounterProps = {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const Counter = ({value, onIncrement, onDecrement}: CounterProps) => (
    <div className="counter">
        <button onClick={onDecrement}>-</button>
        <span>{value}</span>
        <button onClick={onIncrement}>+</button>
    </div>
);