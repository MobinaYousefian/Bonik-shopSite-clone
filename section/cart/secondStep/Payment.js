import { Grid, Typography, Divider } from "@mui/material";
import Theme from "../../../theme/theme";
import {CustomGridRow, TypographyGrayVoucher, TypographyMainVoucher} from "@/section/cart/secondStep/VoucherStyle";

const Payment = ({items}) => {
    return (
        <>
            <CustomGridRow item container>
                <TypographyGrayVoucher>Subtotal:</TypographyGrayVoucher>
                <TypographyMainVoucher>
                    $
                    {items.reduce((price, item) => {
                        price = price + item.count * item.price;
                        return price;
                    }, 0)}
                    .00
                </TypographyMainVoucher>
            </CustomGridRow>
            <CustomGridRow item container>
                <TypographyGrayVoucher>Shipping:</TypographyGrayVoucher>
                <TypographyMainVoucher>-</TypographyMainVoucher>
            </CustomGridRow>
            <CustomGridRow item container>
                <TypographyGrayVoucher>Tax:</TypographyGrayVoucher>
                <TypographyMainVoucher>
                    $
                    {items.reduce((tax, item) => {
                        tax = tax + item.count * (item.price * (item.MSale / 1000));
                        return tax;
                    }, 0)}
                    .00
                </TypographyMainVoucher>
            </CustomGridRow>
            <CustomGridRow item container>
                <TypographyGrayVoucher>Discount:</TypographyGrayVoucher>
                <TypographyMainVoucher>
                    $
                    {items.reduce((discount, item) => {
                        discount =
                            discount + item.count * (item.price * (item.MSale / 100));
                        return discount;
                    }, 0)}
                    .00
                </TypographyMainVoucher>
            </CustomGridRow>
            <Divider />
            <Grid container direction="row-reverse">
                <Typography color={Theme.palette.secondary.dark} fontSize="25px">
                    $
                    {items.reduce((total, item) => {
                        total =
                            total +
                            item.count * item.price -
                            item.count * (item.price * (item.MSale / 100))+
                            item.count * (item.price * (item.MSale / 1000))
                        return total;
                    }, 0)}
                    .00
                </Typography>
            </Grid>
        </>
    );
};

export default Payment;