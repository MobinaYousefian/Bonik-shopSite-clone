import {Grid} from "@mui/material";
import Title from "@/section/home/title/Title";
import {ProductData} from "@/library/ProductData";
import ProductCard from "@/components/productCard/ProductCard";

const MadeForYou = () => {
    return (
        <Grid my={3}>
            <Title title={'Made For You'} icon={''} url={"#"}/>
            <Grid container spacing={3}>
                {ProductData.slice(0,12).map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default MadeForYou