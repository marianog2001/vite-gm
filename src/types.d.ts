export interface Product {
    _id: ObjectID
    title: string
    desc: string
    price: number
    thumbnail: string[]
    code: string
    stock: number
    status: boolean
}

export interface Cart {
    _id: ObjectID
}

