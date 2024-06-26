import { styled } from "@mui/material/styles";
import { Grid} from "@mui/material";

const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    wrap: "nowrap",
});

const ThirdStep = ({ handleBack }) => {
    return (
        <CustomGridRow container mb={2}>
            End
        </CustomGridRow>
    );
};

export default ThirdStep;