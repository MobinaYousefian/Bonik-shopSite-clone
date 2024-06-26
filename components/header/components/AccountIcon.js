'use client'
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from "@mui/material/Badge";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import Cart from "@/section/home/cart/Cart";

const StyledBadge = styled(Badge)(({theme}) => ({
    "& .MuiBadge-badge": {
        right: 15,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    }
}));

export default function AccountIcon() {
    const [state, setState] = useState({right: false,});
    const {items} = useSelector(state => state.cart);
    const total = items.length;

    return (
        <Stack direction="row" gap={2}>
            <IconButton aria-label="add an alarm" sx={{backgroundColor: "#e6ecf6"}}>
                <PersonOutlineOutlinedIcon/>
            </IconButton>
            <StyledBadge badgeContent={total} color="error" overlap="circular">
                <IconButton
                    onClick={() => setState({right: true})}
                    aria-label="add to shopping cart"
                    sx={{backgroundColor: "#e6ecf6", marginRight: "12px"}}
                >
                    <ShoppingBagOutlinedIcon/>
                </IconButton>
            </StyledBadge>
            <Cart items={items} state={state} setState={setState}/>
        </Stack>
    );
}