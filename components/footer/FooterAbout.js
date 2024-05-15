import {Grid} from "@mui/material";
import FooterList from "@/components/footer/FooterList";
import {footerListAbout} from "@/library/footerList";

const FooterAbout = () => {
    return(
        <Grid item xs={12} sm={6} lg={2} mb={2}>
            <FooterList list={footerListAbout}/>
        </Grid>
    )
}
export default FooterAbout