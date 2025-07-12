import type {MenuItemModel} from '../../models/menu-item.model.ts';

export const Menu = ({menu, id}: {menu: MenuItemModel[], id: string}) => {

    return (
        <div className="menu" key={id}>
            <h3>Меню</h3>
            <ul>
                {menu.map(({name}) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    )
}