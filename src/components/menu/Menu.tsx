import type {MenuItemModel} from '../../models/menu-item.model.ts';

export const Menu = ({menu}: {menu: MenuItemModel[]}) => {

    return (
        <div className="menu">
            <h3>Меню</h3>
            <ul>
                {menu.map(({name, id}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    )
}