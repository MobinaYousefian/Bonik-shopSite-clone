import {Grid} from "@mui/material";
import {footerListCustomer} from "@/library/footerList";
import FooterList from "@/components/footer/FooterList";

const FooterCustomer = ()=>{
    return(
        <Grid item xs={12} sm={6} lg={3} mb={2}>
            <FooterList list={footerListCustomer}/>
        </Grid>
    )
}
export default FooterCustomer