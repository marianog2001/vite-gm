import { ItemInterface } from '../../interfaces/ItemInterface';

export function Item({ item }: { item: ItemInterface }): JSX.Element {
    return (
        <div className="flex flex-col m-2 w-[30vw]">
            <img
                src={item.image}
                alt="Imagen por defecto para instrumento sin especificar"
                className="mb-2 h-72 object-cover"
            />
            <h2 className="mb-2">{item.title}</h2>
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{item.price}</span>
                <button className="ml-4">Comprar</button>
            </div>
            <button className='flex justify-end'>Ver más</button>
        </div>
    );
}

<div>
    <img src="" alt="" />
    <h2></h2>
    <div>
        <span>price</span>
        <button>buy</button>
    </div>
</div>;
