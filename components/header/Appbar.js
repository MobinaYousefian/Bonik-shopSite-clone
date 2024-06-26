'use client'
import {useEffect, useState} from "react";
import {AppBar, Toolbar, Box, Stack} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from 'next/link'

import SearchBar from "@/components/header/components/SearchBar";
import MegaMenuButton from "@/components/header/components/MegaMenuButton";
import AccountIcon from "@/components/header/components/AccountIcon";
import SimpleSearchBar from "@/components/header/components/SimpleSearchBar";

export default function Appbar() {
    const matches = useMediaQuery("(min-width:901px)");
    const [isScroll, setIsScroll] = useState(false);
    const [search, setSearch] = useState({search: ''})

    const listenToScroll = () => {
        let heightToHideFrom = 40;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            !isScroll && setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 100,
            }}
        >
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "#fff",
                    height: "80px",
                    boxShadow: "none",
                    maxWidth: "1225px",
                }}
            >
                <Toolbar
                    sx={{
                        "@media all": {
                            minHeight: "80px",
                        },
                        justifyContent: matches ? "space-between" : "center",
                    }}
                >
                    {matches ? (
                        <>
                            <Stack alignItems={'center'} direction="row">
                                <Link href={'/'}>
                                    <Box
                                        component="img"
                                        sx={{width: "98px", height: "50px", marginRight: "8px", cursor: 'pointer'}}
                                        src={'https://bonik-react.vercel.app/assets/images/logo.svg'}
                                    />
                                </Link>
                                {isScroll && <MegaMenuButton backColor="#ffffff"/>}
                            </Stack>
                            <SearchBar search={search} setSearch={setSearch}/>
                            <AccountIcon/>
                        </>
                    ) : (
                        <SimpleSearchBar search={search} setSearch={setSearch}/>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}