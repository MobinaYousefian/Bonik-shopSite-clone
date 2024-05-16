import Link from "next/link";
import {Grid} from "@mui/material";
import Image from "next/image";

const ProductCartImage = ({product}) => {
    return(
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Link href={`/product/${encodeURIComponent(product.id)}`}>
                <Grid>
                    <Image alt={product.title} src={product.images[0].image} className={"img-w-h-100"}/>
                </Grid>
            </Link>
        </Grid>
    )
}

export default ProductCartImage