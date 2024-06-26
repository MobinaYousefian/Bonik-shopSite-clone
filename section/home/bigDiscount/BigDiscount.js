import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import {Box, Grid} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ProductData} from "@/library/ProductData";
import Title from "@/section/home/title/Title";
import ProductSuggestCard from "@/section/product/ProductSuggestCard";

const settings = {
    infinite: false,
    slidesToShow: 6,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 4,
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

const BigDiscount = () => {
    return (
        <Box
            my={4}
            sx={{
                maxWidth: "1200px",
                width: "100%"
            }}>
            <Title title={'Big Discounts'} icon={<CardGiftcardIcon/>} url={"#"}/>
            <Slider {...settings}>
                {ProductData.filter(p => p.category !== 'gadget').map(product => (
                    <Grid key={product.id} padding={'12px'}>
                        <ProductSuggestCard product={product} matches={true}/>
                    </Grid>
                ))}
            </Slider>
        </Box>
    )
}

export default BigDiscount