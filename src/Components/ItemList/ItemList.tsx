import { Item } from "../Item/Item";
import { ItemInterface } from "../../interfaces/ItemInterface";

interface ItemListProps {
    items: ItemInterface[]
}

export function ItemList({items}:ItemListProps): JSX.Element {
    return (
        <div className="flex flex-wrap ">
            {items.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}


