import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import AddressBox from "./AddressBox";
import CartProductList from "@/section/cart/firstStep/CartProductList";

const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    wrap: "nowrap",
});

const FirstStep = ({handleNext,activeStep, items}) => {
    return (
        <CustomGridRow container>
            <Grid item xs={12} lg={7.8}>
                <CartProductList/>
            </Grid>
            <Grid item xs={12} lg={3.8}>
                <AddressBox handleNext={handleNext} activeStep={activeStep} items={items}/>
            </Grid>
        </CustomGridRow>
    );
};

export default FirstStep;