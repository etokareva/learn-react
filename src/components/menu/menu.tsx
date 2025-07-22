import {DishCounter} from '../../dish-counter/dish-counter.tsx';
import type {MenuItemModel} from '../../models/menu-item.model.ts';

export const Menu = ({menu}: {menu: MenuItemModel[]}) => {

    return (
        <div className="menu">
            <h3>Меню</h3>
            <ul>
                {menu.map(({name, id}) => (
                    <li key={id}>
                        <label>{name}</label>
                        <DishCounter/>
                    </li>
                ))}
            </ul>
        </div>
    )
}