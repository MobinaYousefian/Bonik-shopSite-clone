import { styled } from "@mui/material/styles";
import { Box, Typography, StepConnector } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

const ColorLibStepIconRootMobile = styled(Box)(({ ownerState }) => ({
    display: "inline-flex",
    borderRadius: "300px",
    boxShadow: "unset",
    transition: "all 150ms ease-in-out 0s",
    marginTop: "4px",
    padding: "7px",
    marginBottom: "4px",
    backgroundColor: "rgb(255, 225, 230)",
    color: "rgb(233, 69, 96)",
    ...(ownerState.active && {
        backgroundColor: "rgb(233, 69, 96)",
        color: "white",
    }),
    ...(ownerState.completed && {
        backgroundColor: "rgb(233, 69, 96)",
        color: "white",
    }),
}));
const ColorLibStepIconRoot = styled(ColorLibStepIconRootMobile)(
    ({ ownerState }) => ({
        padding: "0.5rem 1.5rem",
    })
);
export const ColorLibStepIconMobile = (props) => {
    const { active, completed, className } = props;
    const CustomStep = styled(Typography)({
        fontSize: "9px",
        boxShadow: "none",
        margin: "unset",
        height: "21px",
        padding: "5px",
        textAlign: "center",
        "&:hover": {
            color: "inherit",
            backgroundColor: "inherit",
        },
        "&:active": {
            color: "inherit",
            backgroundColor: "inherit",
        },
    });
    const icons = {
        1: <CustomStep>1. Cart</CustomStep>,
        2: <CustomStep>2. Details</CustomStep>,
        3: <CustomStep>3. Payment</CustomStep>,
        4: <CustomStep>4. Review</CustomStep>,
    };
    return (
        <ColorLibStepIconRootMobile ownerState={{ completed, active }}>
            {icons[String(props.icon)]}
        </ColorLibStepIconRootMobile>
    );
};
export const ColorLibStepIcon = (props) => {
    const { active, completed, className } = props;
    const CustomStep = styled(Typography)({
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "none",
        margin: "unset",
        height: "21px",
        textAlign: "center",
        "&:hover": {
            color: "inherit",
            backgroundColor: "inherit",
        },
        "&:active": {
            color: "inherit",
            backgroundColor: "inherit",
        },
    });
    const icons = {
        1: <CustomStep>1. Cart</CustomStep>,
        2: <CustomStep>2. Details</CustomStep>,
        3: <CustomStep>3. Payment</CustomStep>,
        4: <CustomStep>4. Review</CustomStep>,
    };
    return (
        <ColorLibStepIconRoot ownerState={{ completed, active }}>
            {icons[String(props.icon)]}
        </ColorLibStepIconRoot>
    );
};

export const ColorLibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            boxShadow: "none",
            backgroundColor: "rgb(233, 69, 96)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            boxShadow: "none",
            backgroundColor: "rgb(233, 69, 96)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        boxShadow: "none",
        cursor: "unset",
        height: "4px",
        padding: "unset",
        marginLeft: "-8px",
        backgroundColor: "rgb(255, 225, 230)",
    },
}));