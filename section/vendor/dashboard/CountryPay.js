import {Box,Grid,Typography} from "@mui/material";
import {PaperCustom, TypographyMain} from "@/style/style";
import {countryPay} from "@/library/countryPay";
import CountryPayAvatar from "@/section/vendor/dashboard/CountryPayAvatar";

const CountryPay = () => {
    return (
        <Grid item xs={12} lg={4}>
            <PaperCustom>
                <Typography variant={'h6'} m={1}>
                    Top Countries
                </Typography>
                {countryPay.map(c => (
                    <Box key={c.id} p={1} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <CountryPayAvatar img={c.image} name={c.name}/>
                            <TypographyMain ml={1}>
                                {c.name}
                            </TypographyMain>
                        </Grid>
                        <Grid>
                            <Typography>
                                ${c.price}
                            </Typography>
                        </Grid>
                    </Box>
                ))}
            </PaperCustom>
        </Grid>
    )
}

export default CountryPay