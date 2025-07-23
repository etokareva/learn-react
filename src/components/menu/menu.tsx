import {DishCounter} from '../../dish-counter/dish-counter';
import type {MenuItemModel} from '../../models/menu-item.model.ts';
import styles from './menu.module.css';

export const Menu = ({menu}: {menu: MenuItemModel[]}) => {
    return (
        <div className={styles.menu}>
            <ul className={styles.list}>
                {menu.map(({name, id, price, ingredients}) => (
                    <li key={id} className={styles.item}>
                        <div>
                            <div className={styles.label}>{name}</div>
                            <div className={styles.price}>{price} руб.</div>
                            <div className={styles.ingredients}>
                                {ingredients.join(', ')}
                            </div>
                        </div>
                        <div className={styles.counterContainer}>
                            <DishCounter/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};