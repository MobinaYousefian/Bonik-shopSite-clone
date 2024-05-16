import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import {TypographyGray, TypographyMain} from "@/style/style";

export const TypographyMainVoucher = styled(TypographyMain)({
    fontSize: "18px",
    lineHeight: "1",
});
export const TypographyGrayVoucher = styled(TypographyGray)({
    fontSize: "14px",
});
export const CustomGridRow = styled(Grid)({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0",
});
