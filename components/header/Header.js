import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from 'next/link'
import NativeSelectDemo from "@/components/header/components/NativeSelectDemo";

const lan = [
    {
        id:1,
        title: "EN",
        img: "https://bonik-react.vercel.app/assets/images/flags/usa.png",
    },
    {
        id:2,
        title: "BN",
        img: "https://bonik-react.vercel.app/assets/images/flags/bd.png",
    },
    {
        id:3,
        title: "HN",
        img: "	https://bonik-react.vercel.app/assets/images/flags/in.png",
    },
];
const usd = [
    {
        id:1,
        title: "USD",
        img: "https://bonik-react.vercel.app/assets/images/flags/usa.png",
    },
    {
        id:2,
        title: "EUR",
        img: "https://bonik-react.vercel.app/assets/images/flags/uk.png",
    },
    {
        id:3,
        title: "BDT",
        img: "https://bonik-react.vercel.app/assets/images/flags/bd.png",
    },
    {
        id:4,
        title: "INR",
        img: "https://bonik-react.vercel.app/assets/images/flags/in.png",
    },
];

export const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#0f3460",
            }}
        >
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#0f3460",
                    height: "40px",
                    maxWidth: "1225px",
                    boxShadow: "none",
                }}
            >
                <Toolbar
                    sx={{
                        "@media all": {
                            minHeight: "40px",
                        },
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        className={"tabletBreakPoint"}
                        sx={{
                            display: "flex"
                        }}
                    >
                        <LocalPhoneOutlinedIcon
                            sx={{ marginRight: "8px", fontSize: "16px" }}
                        />
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ marginRight: "20px", fontSize: "12px" }}
                        >
                            +88012 3456 7894
                        </Typography>
                        <EmailOutlinedIcon
                            sx={{ marginRight: "8px", fontSize: "16px" }}
                        />
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ flexGrow: 1, fontSize: "12px" }}
                        >
                            support@ui-lib.com
                        </Typography>
                    </Box>
                    <Link href={'/'} passHref className={"mobileBreakPoint"}>
                        <Box
                            component="img"
                            sx={{ height: "36px", borderRadius: "4px" }}
                            src="https://bonik-vuetify.vercel.app/img/logo.6d0b86e2.svg"
                        >

                        </Box>
                    </Link>
                    <Stack direction="row" alignItems="center">
                        <Typography
                            variant="p"
                            component="div"
                            sx={{
                                marginRight: "20px",
                                fontSize: "12px",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "red",
                                },
                            }}
                            className={"tabletBreakPoint"}
                        >
                            Need Help?
                        </Typography>
                        <Box>
                            <NativeSelectDemo list={lan} index={2} color="white" right={'70px'}/>
                        </Box>
                        <Box>
                            <NativeSelectDemo list={usd} index={0} color="white" right={'10px'} />
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}