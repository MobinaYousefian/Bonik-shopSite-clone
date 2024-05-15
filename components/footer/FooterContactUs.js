import {Grid} from "@mui/material";
import FooterList from "@/components/footer/FooterList";
import {footerListContactUs} from "@/library/footerList";
import FooterContactUsSocial from "@/components/footer/FooterContactUsSocial";

const FooterContactUs = () =>{
    return(
        <Grid item xs={12} sm={6} lg={3} mb={2}>
            <FooterList list={footerListContactUs}/>
            <FooterContactUsSocial/>
        </Grid>
    )
}

export default FooterContactUs