import classNames from 'classnames';
import styles from './tab.module.css';

interface TabProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

export const Tab = ({title, isActive, onClick}: TabProps) => {
    return (
        <button disabled={isActive}
                onClick={onClick}
                className={classNames(
                    styles.tab,
                    {[styles.tabActive]: isActive}
                )}>
            {title}
        </button>
    )
}