import { Divider, TextField } from "@mui/material";
import {CustomGridRow} from "@/section/cart/firstStep/cartProduct/CartProductStyle";
import {
    CustomChip,
    TypographyFormTitle,
    TypographyMain,
    TypographyMainTotal
} from "@/section/cart/firstStep/AdressBoxStyle";
import {PaperCustom, PrimaryBtn, SecondaryBtn, TypographyGray} from "@/style/style";
import AddressBoxForm from "@/section/cart/firstStep/AddressBoxForm";

const AddressBox = ({ handleNext, items}) => {
    return (
        <PaperCustom>
            <CustomGridRow item container sx={{ justifyContent : "space-between"}}>
                <TypographyGray fontSize="14px">Total:</TypographyGray>
                <TypographyMainTotal>
                    $
                    {items.reduce((price, item) => {
                        price = price + (item.count * (item.sale === true ? (item.price * (100 - item.MSale)) / 100 : item.price));
                        return price;
                    }, 0)}
                    .00
                </TypographyMainTotal>
            </CustomGridRow>
            <Divider sx={{ margin: "8px 0" }} />
            <CustomGridRow item container my="16px" sx={{ justifyContent : "space-between"}}>
                <TypographyMain>Additional Comments</TypographyMain>
                <CustomChip label="Note"/>
            </CustomGridRow>
            <TextField multiline rows={6} fullWidth sx={{ margin: "8px 0" }} />
            <Divider sx={{ margin: "8px 0" }} />
            <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
            <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
            <Divider sx={{ margin: "8px 0" }} />
            <CustomGridRow item container>
                <TypographyMain sx={{ margin: "8px 0" }}>
                    Shipping Estimates
                </TypographyMain>
            </CustomGridRow>
            <AddressBoxForm/>
            <TypographyFormTitle>Zip Code</TypographyFormTitle>
            <TextField placeholder="3100" fullWidth sx={{ margin: "8px 0" }} />
            <SecondaryBtn fullWidth sx={{ margin: "8px 0" }}>
                Calculate Shipping
            </SecondaryBtn>
            <PrimaryBtn fullWidth onClick={handleNext}>
                Checkout Now
            </PrimaryBtn>
        </PaperCustom>
    );
};

export default AddressBox;