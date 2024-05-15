import {Box, Grid} from '@mui/material';
import FooterLogo from "@/components/footer/FooterLogo";
import FooterAbout from "@/components/footer/FooterAbout";
import FooterCustomer from "@/components/footer/FooterCustomer";
import FooterContactUs from "@/components/footer/FooterContactUs";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0F3460',
                padding : "5rem 2rem",
                color: '#fff',
                marginTop: '2rem',
                '@media (min-width: 1027px)': {
                    padding : "6rem 11rem"
                },
            }}
        >
            <Grid container>
                <FooterLogo/>
                <FooterAbout/>
                <FooterCustomer/>
                <FooterContactUs/>
            </Grid>
        </Box>
    )
}
export default Footer