import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import {Grid} from '@mui/material';
import {PaperCustom} from "@/style/style";
import {featureBrand} from "@/library/featureBrand";
import Title from "@/section/home/title/Title";
import CartItem from "@/section/home/ratingAndFeature/CartItem";

const FeatureBrand = () => {
    return (
        <Grid container >
            <Title title={'Feature Brands'} icon={<StarPurple500Icon/>}/>
            <PaperCustom>
                <Grid container spacing={3}>
                    {featureBrand.map((item)=>(
                        <Grid key={item.id} item  xs={12} sm={6} md={6} lg={6}>
                            <CartItem
                                image={item.image}
                                title={item.title}
                                display={'none'}
                                alignItem={'left'}
                                w={900}
                                h={900}
                                className={"responsiveWidth-Height"}
                            />
                        </Grid>
                    ))}
                </Grid>
            </PaperCustom>
        </Grid>
    );
}

export default FeatureBrand;