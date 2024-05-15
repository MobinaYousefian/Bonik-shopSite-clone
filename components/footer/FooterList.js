import {Grid, Typography} from "@mui/material";

const FooterList = ({list}) => {
    return(
        <>
            {list.map(t => (
                <Grid key={t.id} display={'flex'} flexDirection={'column'}>
                    <Grid mb={2}>
                        <Typography fontWeight={'bold'} variant={'h5'}>
                            {t.title}
                        </Typography>
                    </Grid>
                    {t.items.map(i => (
                        <Typography
                            key={`${i.id}`}
                            sx={{
                                color: '#A4B4BE',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: "#fff",
                                }
                            }}
                            p={0.5}
                        >
                            {i.item}
                        </Typography>
                    ))}
                </Grid>
            ))}
        </>
    )
}
export default FooterList