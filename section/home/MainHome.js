'use client'
import {BoxCustom} from "@/style/style";
import {FlashDeal} from "@/section/home/flashDeal/FlashDeal";
import Category from "@/section/home/topCategories/TopCategories";
import RatingAndFeature from "@/section/home/ratingAndFeature/RatingAndFeature";
import NewArrival from "@/section/home/newArrival/NewArrival";
import BigDiscount from "@/section/home/bigDiscount/BigDiscount";
import Brands from "@/section/home/brands/Brands";
import Ads from "@/section/home/ads/Ads";
import CategoryList from "@/section/home/categoryList/CategoryList";
import MadeForYou from "@/section/home/madeForYou/MadeForYou";
import AboutUs from "@/section/home/aboutUs/AboutUs";

const MainHome = () => {

    return (
        <BoxCustom>
            <FlashDeal/>
            <Category/>
            <RatingAndFeature/>
            <NewArrival/>
            <BigDiscount/>
            <Brands title={'Car'} category={'car'} display={'none'}/>
            <Ads/>
            <Brands title={'Motor'} category={'motor'} display={'flex'}/>
            <Brands title={'Gadget'} category={'gadget'} display={'flex'}/>
            <CategoryList/>
            <MadeForYou/>
            <AboutUs/>
        </BoxCustom>
    )
}
export default MainHome;