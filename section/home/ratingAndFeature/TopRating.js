import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {Grid} from '@mui/material';
import CartItem from './CartItem';
import {topRating} from "@/library/topRating";
import {PaperCustom} from "@/style/style";
import Title from "@/section/home/title/Title";

const TopRating = () => {
    return (
        <Grid container>
            <Title title={'Top Ratings'} icon={<MilitaryTechIcon/>} url={"#"}/>
            <PaperCustom>
                <Grid container spacing={3}>
                    {topRating.map((item)=>(
                        <Grid key={item.id} item xs={6} sm={6} md={3} lg={3}>
                            <CartItem
                                image={item.image}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                total={item.total}
                                display={'block'}
                                alignItem={'center'}
                                className={"img-w-h-100"}
                                w={900}
                                h={900}
                            />
                        </Grid>
                    ))}
                </Grid>
            </ PaperCustom>
        </Grid>
    );
}

export default TopRating;