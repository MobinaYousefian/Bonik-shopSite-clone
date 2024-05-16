import {Grid} from "@mui/material";
import {TypographyGray} from "@/style/style";

const OTitle = (['Order #','Status','Date purchased','Total']);

const TitleOrders = ({matches}) => {
    return(
        <Grid container display={matches === true ? 'flex' : 'none'} px={2.2} py={0}>
            {OTitle.map(title => (
                <Grid key={title} item sm={2.8}>
                    <TypographyGray fontSize={'15px'} fontWeight={'bolder'}>
                        {title}
                    </TypographyGray>
                </Grid>
            ))}
        </Grid>
    )
}

export default TitleOrders