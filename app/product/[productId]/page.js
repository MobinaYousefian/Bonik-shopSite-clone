import {ProductData} from "@/library/ProductData";
import ProductPage from "@/components/ProductPage";

export default function ProductId ({params}) {
    const id = params.productId
    const product = ProductData.filter(p => p.id === Number(id))[0]

    return (
        <ProductPage product={product}/>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: {productId: '1'} }
        ],
        fallback: 'blocking'
    };
}
