import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ProductData} from "@/library/ProductData";
import Title from "@/section/home/title/Title";
import ProductCard from "@/components/productCard/ProductCard";


const settings = {
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive:[
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

export const FlashDeal = () => {
    return (
        <Box
            my={1}
            sx={{
                maxWidth: "1200px",
                width:"100%"
            }}>
            <Title title={"Flash Deals"} icon={<BoltIcon/>} url={"#"}/>
            <Slider {...settings}>
                {ProductData.map(product => (
                    <Grid key={product.id} sx={{padding:"16px"}}>
                        <ProductCard product={product} hover={false}/>
                    </Grid>
                ))}
            </Slider>
        </Box>
    );
}