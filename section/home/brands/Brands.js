import {Grid} from "@mui/material";
import {ProductData} from "@/library/ProductData";
import Title from "@/section/home/title/Title";
import Brand from "@/section/home/brands/Brand";
import ProductCard from "@/components/productCard/ProductCard";

const Brands = ({category , title, display}) => {
    return (
        <Grid container spacing={3} my={3}>
            <Grid
                item xs={0} sm={0} md={3}
                display={"none"}
                sx={{
                    '@media (min-width: 600px)': {
                        display : "block"
                    },
                }}
            >
                <Brand display={display}/>
            </Grid>
            <Grid item xs={12} sm={7} md={9} pl={3}>
                <Title title={title} icon={''}/>
                <Grid container spacing={3}>
                    {ProductData.filter(p=> p.category === category).map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                            <ProductCard product={product} key={product.id}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Brands