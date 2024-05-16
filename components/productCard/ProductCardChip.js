import {Chip, Grid} from "@mui/material";

const ProductCardChip = ({product}) =>{
    return(
        <Grid>
            <Chip
                sx={{
                    backgroundColor: "#E94560",
                    color: '#fff',
                    textAlign: 'center',
                    borderRadius: '300px',
                    fontSize: '12px',
                    height:'25px',
                }}
                label={product.sale === true ? `${product.MSale}% off` : `0% off`}
            />
        </Grid>
    )
}

export default ProductCardChip