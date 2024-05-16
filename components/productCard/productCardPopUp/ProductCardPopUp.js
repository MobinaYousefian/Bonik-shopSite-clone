import {Grid} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ProductImage from "@/section/product/ProductImage";
import ProductInfo from "@/section/product/ProductInfo";

const ProductCardPopUp = ({product,setOpen}) => {
    return(
        <Grid container p={2} position={'relative'} display={'flex'} flexDirection={'row'}>
            <Grid position={'absolute'} right={'10px'}>
                <CloseIcon
                    sx={{
                        color:'#E94560',
                        cursor:'pointer'
                    }}
                    onClick={()=>setOpen(false)}
                />
            </Grid>
            <ProductImage margin={8} product={product} px={0} mt={6}/>
            <ProductInfo product={product}/>
        </Grid>
    )
}

export default ProductCardPopUp