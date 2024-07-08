import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

type ItemListContainerProp = {
    endpoint:string
}

export function ItemListContainer({endpoint}:ItemListContainerProp) {
    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState([]);

    

    useEffect(() => {
        setLoading(true);
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator when data is being fetched
    }

    return (
        <div>
            <ItemList items={items}/>
        </div>
    );
}
