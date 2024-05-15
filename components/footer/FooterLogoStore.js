import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import GooglePlay from "../../public/asset/general/playstore (1).png";
import AppStore from "../../public/asset/general/app-store (1).png";

const store = [
    {
        id:1,
        title1:'Get it on',
        title2:'Google Play',
        logo:<Image src={GooglePlay} alt={'play-store'}/>
    },
    {
        id:2,
        title1:'Download on it',
        title2:'App Store',
        logo:<Image src={AppStore} alt={'app-store'}/>
    },
]

const FooterLogoStore = () => {
    return(
        <Box display={'flex'}
             sx={{
                 flexDirection: 'column',
                 '@media (min-width: 650px)': {
                     flexDirection : "row"
                 },
        }}
        >
            {store.map(s => (
                <Box
                    key={s.id}
                    sx={{
                        width: "60%",
                        '@media (min-width: 650px)': {
                            width : "38%"
                        },
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        backgroundColor: '#0C2A4D',
                        padding: '8px 8px',
                        margin: '0.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    <Grid>
                        {s.logo}
                    </Grid>
                    <Grid lineHeight={0}>
                        <Grid>
                            <Typography fontSize={'8px'}>
                                {s.title1}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography fontWeight={'bold'}>
                                {s.title2}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    )
}
export default FooterLogoStore