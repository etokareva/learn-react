import styles from './counter.module.css';

type CounterProps = {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const Counter = ({value, onIncrement, onDecrement}: CounterProps) => (
    <div className={styles.counter}>
        <button onClick={onDecrement}
                className={styles.button}
                disabled={value <= 0}>
            -
        </button>
        <span className={styles.value}>
            {value}
        </span>
        <button onClick={onIncrement}
                className={styles.button}
                disabled={value >= 5}>
            +
        </button>
    </div>
);