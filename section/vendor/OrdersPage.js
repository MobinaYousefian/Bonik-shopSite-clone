'use client'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from "react";
import {Grid} from '@mui/material';
import {BoxCustom} from "@/style/style";
import {orders} from "@/library/orders";
import VendorDrawer from "@/section/vendor/VendorDrawer";
import VendorMenu from "@/section/vendor/VendorMenu";
import VendorTitle from "@/section/vendor/VendorTitle";
import {usePathname} from "next/navigation";
import PaginationCustom from "@/components/pagination/PaginationCustom";
import Order from "@/section/vendor/orders/Order";
import TitleOrders from "@/section/vendor/orders/TitleOrders";

export default function OrdersPage() {
    const matches = useMediaQuery('(min-width:800px)');
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const [menu,setMenu] = useState(false)
    const pathName = usePathname()

    return (
        <BoxCustom>
            <VendorDrawer menu={menu} setMenu={setMenu} pathName={pathName}/>
            <Grid container spacing={3}>
                <VendorMenu matchesMenu={matchesMenu} pathName={pathName}/>
                <Grid item xs={12} lg={9}>
                    <VendorTitle matchesMenu={matchesMenu} setMenu={setMenu} pathName={pathName}/>
                    <TitleOrders matches={matches}/>
                    {orders.map(order =>
                        (<Order key={order.id} process={order.process} price={order.price} time={order.time} id={order.id} matches={matches}/>))}
                    <PaginationCustom/>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}