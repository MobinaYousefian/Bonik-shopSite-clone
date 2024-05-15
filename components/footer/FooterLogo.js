import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import Logo from "../../public/asset/general/logo.svg";
import FooterLogoStore from "./FooterLogoStore";

const FooterLogo = () => {
    return (
        <Grid item xs={12} sm={6} lg={4} mb={2} pr={2}>
            <Grid>
                <Image src={Logo} alt="logo"/>
            </Grid>
            <Grid mt={2} mb={1}>
                <Typography color={"#A4B4BE"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
                    Sit
                    diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Typography>
            </Grid>
            <FooterLogoStore/>
        </Grid>
    )
}
export default FooterLogo