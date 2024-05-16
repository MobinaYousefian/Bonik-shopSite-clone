'use client'
import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {BoxCustom} from "@/style/style";
import {useState} from "react";
import {usePathname} from "next/navigation";
import VendorDrawer from "@/section/vendor/VendorDrawer";
import VendorMenu from "@/section/vendor/VendorMenu";
import VendorTitle from "@/section/vendor/VendorTitle";
import PaperPay from "@/section/vendor/dashboard/PaperPay";
import Chart from "@/section/vendor/dashboard/Chart";
import CountryPay from "@/section/vendor/dashboard/CountryPay";

export default function DashboardPage() {
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const [menu, setMenu] = useState(false)
    const pathName = usePathname()

    return (
        <BoxCustom>
            <VendorDrawer menu={menu} setMenu={setMenu} pathName={pathName}/>
            <Grid container spacing={3}>
                <VendorMenu matchesMenu={matchesMenu} pathName={pathName}/>
                <Grid item xs={12} lg={9}>
                    <Grid container spacing={3}>
                        <VendorTitle setMenu={setMenu} matchesMenu={matchesMenu} pathName={pathName}/>
                        <PaperPay/>
                        <Chart/>
                        <CountryPay/>
                    </Grid>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}