import {Grid} from "@mui/material";
import Ads1 from '../../../public/asset/ads/ads1.png'
import Ads2 from '../../../public/asset/ads/ads2.png'
import Image from 'next/image'

const Ads = () => {
    return (
        <Grid container my={3}>
            <Grid item xs={12} md={4} p={1}>
                <Image src={Ads1} alt={"Ads1"} className={"img-w-h-100"}/>
            </Grid>
            <Grid item xs={12} md={8} p={1}>
                <Image src={Ads2} alt={"Ads2"} className={"img-w-h-100"}/>
            </Grid>
        </Grid>
    )
}

export default Ads