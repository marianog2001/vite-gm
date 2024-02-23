import { useState } from 'react'
import { ItemList } from '../ItemList/ItemList'

export function ItemListContainer () {

    const (loading, setLoading) = useState(false)

    const (items, setItems) = useState([])

    return (
        <div>
            <ItemList />
        </div>
    )
}
