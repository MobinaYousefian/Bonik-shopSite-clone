import { Stack } from "@mui/material";
import Link from 'next/link'
import CustomDrop from "@/components/header/components/CustomDrop";

const home = [
    { id:1,name: "Super Store", sub: [] },
    { id:2,name: "Grocery", sub: [] },
    { id:3,name: "Niche Market 1", sub: [] },
    { id:4,name: "Niche Market 2", sub: [] },
];
const page = [
    { id:1,name: "Sale Page", sub: ["version 1", "version 2"] },
    { id:2,name: "Vendor", sub: ["All Vendors", "Vendor Store"] },
    { id:3,name: "Shop", sub: ["Search Product", "Single Product", "Card", "Checkout", "Alternative Checkout"] },
];
const user = [
    { id:1,name: "Orders", sub: ["Order List", "Order Details"] },
    { id:2,name: "Profile", sub: ["View Profile", "Edit Profile"] },
    { id:3,name: "Address", sub: ["Address List", "Add Address"] },
    { id:4,name: "Support Tickets", sub: ["All Tickets", "Tickets Details"] },
    { id:5,name: "Wishlist", sub: [] },
];
const vendor = [
    { id:1,name:<Link href={'/vendor/dashboard'}>Dashboard</Link>, sub: [] },
    { id:2,name: "Products", sub: ["All Products", "Add/Edit Product"] },
    { id:3,name: <Link href={'/vendor/orders'}>Orders</Link>, sub: ['All orders', "Order Details"] },
    { id:4,name: "Profile", sub: [] },
];
export default function MainMenu() {
    return (
        <Stack direction="row">
            <CustomDrop title="Home" arr={home} />
            <CustomDrop title="Pages" arr={page} />
            <CustomDrop title="User Account" arr={user} />
            <CustomDrop title="Vendor Account" arr={vendor} />
            <CustomDrop title="Track My Orders" arr={[]} />
            <CustomDrop title="Back to Demos" arr={[]} />
        </Stack>
    );
}