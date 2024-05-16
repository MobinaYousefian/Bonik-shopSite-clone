import Link from "next/link";
import { Grid } from "@mui/material";
import { RedButton, WhiteButton } from "@/style/style";

import { PrimaryBtn, SecondaryBtn } from "@/style/style";

const CartButtonBox = ({items}) => {

    return (
        <Grid
            display={items.length === 0 ? "none" : "flex"}
            sx={{
            flexDirection: "column",
            width: "100%",
            height: "10%",
            padding: "10px",
        }}>
            <Link href={`/cart`}>
                <RedButton sx={{ margin: "0px 1rem 0.75rem", width: "100%"}}>
                    CheckOut Now $(
                    {items.reduce((price, item) => {
                        price = price + (item.count * (item.sale === true ? (item.price * (100 - item.MSale)) / 100 : item.price));
                        return price;
                    }, 0)}
                    )
                </RedButton>
            </Link>
            <Link href={`/cart`}>
                <WhiteButton sx={{ margin: "0px 1rem 0.75rem", width: "100%" }}>
                    View Cart
                </WhiteButton>
            </Link>
        </Grid>
    );
};
export default CartButtonBox;