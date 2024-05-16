'use client'
import {Grid, useMediaQuery} from "@mui/material";
import {BoxCustom} from "@/style/style";
import ProductImage from "@/section/product/ProductImage";
import ProductInfo from "@/section/product/ProductInfo";
import ProductTabs from "@/section/product/ProductTabs";
import ProductSuggest from "@/section/product/ProductSuggest";
import ProductVendor from "@/section/product/ProductVendor";
import ProductRelatedProduct from "@/section/product/ProductRelatedProduct";

export default function ProductPage({product}) {
    const matches = useMediaQuery('(min-width:400px)');
    return (
        <BoxCustom>
            <Grid container spacing={2}>
                <ProductImage product={product} margin={0}/>
                <ProductInfo product={product}/>
                <ProductTabs product={product}/>
                <ProductSuggest matches={matches}/>
                <ProductVendor/>
                <ProductRelatedProduct category={product.category}/>
            </Grid>
        </BoxCustom>
    )
}