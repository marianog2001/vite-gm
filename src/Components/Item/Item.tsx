export function Item(): JSX.Element {

    

return (
    <div className="flex flex-column m-2">
        <img src="/default-thumbnail.png" alt="Imagen por defecto para instrumento sin especificar" />
        <h2>Titulo instrumento</h2>
        <div>
            <div>
                <span>$Precio</span>
                <button>Comprar</button>
            </div>
            <span>Ver mas</span>
        </div>
    </div>
)
}
