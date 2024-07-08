export default function HeroBanner() {
    return (
        <>
            <div className="m-10 px-10 py-5 bg-amber-700">
                <img className="w-1/2" src="default-thumbnail.png" alt="" />
                <h3>Titulo</h3>
                <span>Producto Desc</span>
                <p>
                    Con que criterio sera elegido el item para mostrar en el
                    hero? <b>Por ahora hacer con un mock</b>
                </p>
            </div>
        </>
    );
}
