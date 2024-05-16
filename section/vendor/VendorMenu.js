import {Grid, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Link from 'next/link'
import Theme from "../../theme/theme";
import {vendorMenu} from "@/library/vendorMenu";

const PaperCustom = styled(Paper)({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 0',
    borderRadius: '10px',
    margin: '0.5rem 0',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
})
const MenuItemCustom = styled(MenuItem)({
    color: Theme.palette.secondary.dark,
    backgroundColor: Theme.palette.primary.light,
    borderLeft:`4px solid ${Theme.palette.primary.light}`,
    height:'20px',
    '&:hover': {
        color: Theme.palette.primary.main,
        backgroundColor: Theme.palette.primary.light,
        borderLeft:`4px solid ${Theme.palette.primary.main}`,
    },
})

const VendorMenu = ({matchesMenu ,pathName}) => {
    return(
        <Grid item lg={3} display={matchesMenu === true ? 'block' : 'none'}>
            <PaperCustom>
                <MenuList>
                    {vendorMenu.map(m => (
                        <Link href={m.link} key={m.id}>
                            <MenuItemCustom
                                sx={{
                                    margin:'22px 0',
                                    color: pathName === m.link ? Theme.palette.primary.main : '',
                                    borderLeft: pathName === m.link ? `4px solid ${Theme.palette.primary.main}` : ''
                            }}
                            >
                                <Grid mr={1} mt={0.6}>
                                    {m.icon}
                                </Grid>
                                <ListItemText>
                                    {m.title}
                                </ListItemText>
                                <Typography>
                                    {m.number}
                                </Typography>
                            </MenuItemCustom>
                        </Link>
                    ))}
                </MenuList>
            </PaperCustom>
        </Grid>
    )
}

export default VendorMenu