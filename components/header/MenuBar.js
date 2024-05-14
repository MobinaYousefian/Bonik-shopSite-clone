import {AppBar, Toolbar, Box} from "@mui/material";
import MainMenu from "./components/MainMenu";
import MegaMenuButton from "@/components/header/components/MegaMenuButton";

export default function MenuBar() {
    return (
        <Box
            sx={{
                display: "flex",
                position: 'relative',
                justifyContent: "center",
                backgroundColor: "#fff",
                boxShadow: " rgb(43 52 69 / 10%) 0px 4px 16px",
                zIndex: 5
            }}
        >
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#fff",
                    height: "60px",
                    boxShadow: "none",
                    maxWidth: "1225px"
                }}
            >
                <Toolbar
                    sx={{
                        "@media all": {
                            minHeight: "60px",
                        },
                        justifyContent: "space-between",
                    }}
                >
                    <MegaMenuButton title="Categories" backColor="#e6ecf6"/>
                    <MainMenu/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}