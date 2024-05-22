import {Rating} from "@mui/material";

const ProductCartRating = ({product}) => {
    return(
        <>
            <Rating pl={2} size={'small'} value={parseInt(product.rate)} readOnly/>
        </>
    )
}

export default ProductCartRating