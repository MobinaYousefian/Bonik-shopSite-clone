'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import Image from 'next/image'
import watch from "../../../public/asset/slideShow/applewatch.png";
import styled from "@emotion/styled";
import Theme from "../../../theme/theme";
import {RedButton} from "@/style/style";

const data = [
    {
        id:1,
        title: "50% Off For Your First Shopping",
    }, {
        id:2,
        title: "50% Off For Your First Shopping",
    }, {
        id:3,
        title: "50% Off For Your First Shopping",
    }, {
        id:4,
        title: "50% Off For Your First Shopping",
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div/>
    );
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SampleNextArrow/>
}
const InfoBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
})

export default function SlideShow() {
    const Query = useMediaQuery("(min-width:321px)");
    const Query1 = useMediaQuery("(min-width:800px)");

    const InfoHeader = styled(Typography)({
        fontSize: Query === true ? '4rem' : "1.5rem",
        marginTop: 0,
        marginBottom: '1.5rem',
        lineHeight: '1.2',
        color: "rgb(43, 52, 69)",
        fontWeight: "bold"
    });

    return (
        <Grid container mb={3} bgcolor={Theme.palette.primary.light} pb={8} pr={Query1 === true ? 0 : 4} zIndex={-1}>
            <Grid container spacing={3} maxWidth={'1200px'} margin={"auto"}>
                <Grid item xs={0} md={3} display={Query1 === true ? 'flex' : 'none'}>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box sx={{width: "100%", maxWidth: "1200px"}}>
                        <Slider {...settings}>
                            {
                                data.map((item) => (
                                    <Grid container key={item.id} sx={{display: "flex!important", alignItems: "center"}} mb={4}>
                                        <Grid item xs={8.5}>
                                            <InfoBox>
                                                <InfoHeader>{item.title}</InfoHeader>
                                                <Typography sx={{marginBottom: '1.35rem', color: 'rgb(15, 52, 96)',}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur
                                                    corporis dicta exercitationem, odit recusandae.
                                                </Typography>
                                                <RedButton sx={{padding:'5px 20px'}}>
                                                    Visit Collections
                                                </RedButton>
                                            </InfoBox>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <Image alt="watch logo" src={watch} className={"imageSlideShow"}/>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}