export function ItemList ({ items }): JSX.Element {
    return (
        <div>
            {items.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}
