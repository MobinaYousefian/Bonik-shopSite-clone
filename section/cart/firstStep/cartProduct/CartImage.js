import Image from "next/image";
import Link from "next/link";
import {Grid} from "@mui/material";
import { CustomGridColumn } from "./CartProductStyle";
import RemoveButton from "@/section/cart/firstStep/cartProduct/RemoveButton";

const CartImage = ({ product }) => {
    return (
        <CustomGridColumn
            item
            sx={{
                '@media (min-width: 750px)': {
                    width: "140px"
                },
            }}
            width={"100%"}
            position="relative"
        >
            <Link href={`/product/${encodeURIComponent(product.id)}`} passHref>
                <Grid>
                    <Image alt={product.title} src={product.images[0].image} className={"img-w-h-100"}/>
                </Grid>
            </Link>
            <RemoveButton product={product} />
        </CustomGridColumn>
    );
};

export default CartImage;
