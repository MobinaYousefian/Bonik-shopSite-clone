import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import {PrimaryBtn, SecondaryBtn} from "@/style/style";
import ShippingAddress from "@/section/cart/secondStep/ShippingAddress";
import BillingAddress from "@/section/cart/secondStep/BillingAddress";
import Voucher from "@/section/cart/secondStep/Voucher";

const CustomGridRow = styled(Grid)({
    direction:"row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    wrap: "nowrap",
});

const SecondStep = ({ handleNext, handleBack }) => {
    return (
        <CustomGridRow container>
            <Grid container item justifyContent="space-between" xs={12} lg={7.8}>
                <ShippingAddress/>
                <BillingAddress/>
                <Grid item xs={5.8} my={2}>
                    <SecondaryBtn fullWidth onClick={() => handleBack()}>
                        Back to Cart
                    </SecondaryBtn>
                </Grid>
                <Grid item xs={5.8} my={2}>
                    <PrimaryBtn fullWidth onClick={() => handleNext()}>
                        Proceed to Payment
                    </PrimaryBtn>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3.8}>
                <Voucher/>
            </Grid>
        </CustomGridRow>
    );
};

export default SecondStep;