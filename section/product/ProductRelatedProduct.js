import {Grid} from "@mui/material";
import {ProductData} from "@/library/ProductData";
import {TypographyMain} from "@/style/style";
import ProductCard from "@/components/productCard/ProductCard";

const ProductRelatedProduct = ({category}) =>{
    return(
        <Grid item xs={12} my={2}>
            <TypographyMain mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Related Products
            </TypographyMain>
            <Grid container spacing={4}>
                {ProductData.filter(p=> p.category === category).slice(0,4).map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ProductRelatedProduct