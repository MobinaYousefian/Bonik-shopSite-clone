'use client'
import { useSelector } from "react-redux";
import { TextField,FormControl } from "@mui/material";
import Payment from "./Payment";
import {PaperCustom, SecondaryBtn} from "@/style/style";

const Voucher = () => {
    const items = useSelector((state) => state.cart.items);
    return (
        <PaperCustom>
            <Payment items={items}/>
            <FormControl fullWidth>
                <TextField placeholder="Voucher" sx={{ margin: "8px 0" }} />
            </FormControl>
            <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
        </PaperCustom>
    );
};

export default Voucher;