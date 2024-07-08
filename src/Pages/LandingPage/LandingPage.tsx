import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import { ItemListContainer } from "../../Components/ItemListContainer/ItemListContainer";

export function LandingPage() {
    return (
        <>
            <HeroBanner />
            <ItemListContainer endpoint='https://fakestoreapi.com/products' />
        </>
    )
}