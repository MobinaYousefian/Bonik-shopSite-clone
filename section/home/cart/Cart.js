import styled from "@emotion/styled";
import { Typography, Divider, Drawer, Grid } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Theme from "../../../theme/theme";

import CartButtonBox from "@/section/home/cart/CartButtonBox";
import NoProduct from "@/section/home/cart/NoProduct";
import CartSelectedProductsList from "@/section/home/cart/CartSelectedProductsList";

const Cart = ({ state, setState, items }) => {

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const DrowerContainer = styled(Grid)({
        height: "85%",
        width: "380px",
        overflowY:"auto"
    });
    const Header = styled(Grid)({
        width: "74",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        padding: "20px",
    });
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark,
        fontWeight: "600",
        fontSize: "16px",
        marginLeft: "0.5rem",
    });
    const CustomGrid = styled(Grid)({
        flexDirection: "column",
        justifyContent: "space-between",

    });
    return (
        <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
        >
            <DrowerContainer role="presentation">
                <CustomGrid container>
                    <Header>
                        <ShoppingBagOutlinedIcon
                            sx={{ fontSize: 28, color: Theme.palette.secondary.dark }}
                        />
                        <TypographyMain>
                            {items.reduce((count, item) => {
                                count = count + item.count;
                                return count;
                            }, 0)}{" "}
                            items
                        </TypographyMain>
                    </Header>
                    <Divider />
                    <CartSelectedProductsList items={items}/>
                </CustomGrid>
                <NoProduct items={items}/>
            </DrowerContainer>
            <CartButtonBox items={items}/>
        </Drawer>
    );
};
export default Cart;