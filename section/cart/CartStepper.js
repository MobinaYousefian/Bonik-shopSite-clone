'use client'
import { useState } from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import { useMediaQuery } from "@mui/material";
import { Grid, Stepper, Step, StepLabel } from "@mui/material";
import {ColorLibStepIcon, ColorLibStepIconMobile} from "@/section/cart/CartStepperStyle";

import FirstStep from "@/section/cart/firstStep/FirstStep";
import SecondStep from "@/section/cart/secondStep/SecondStep";
import ThirdStep from "@/section/cart/thirdStep/ThirdStep";
import StepperConnector from "@/section/cart/StepperConnector";
import StepperContent from "@/section/cart/StepperContent";

ColorLibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const CartStepper = () => {
    const items = useSelector((state) => state.cart.items);

    const [activeStep, setActiveStep] = useState(0);
    const [completed] = useState({});
    const Mobile = useMediaQuery("(min-width:500px)");
    const Tablet = useMediaQuery('(min-width:800px)');

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const steps = [
        {
            id: 0,
            title: "1.Cart",
            element: <FirstStep handleNext={handleNext} items={items}/>,
        },
        {
            id: 1,
            title: "2.Details",
            element: <SecondStep handleNext={handleNext} handleBack={handleBack} />,
        },
        {
            id: 2,
            title: "3.Payment",
            element: <ThirdStep handleBack={handleBack} />,
        },
        {
            id: 3,
            title: "4.Review",
            element: "",
        },
    ];
    return (
        <Grid container>
            <Grid item container py={2.5} px={Tablet === true ? 11 : 0} mb="12px" display={'flex'} justifyContent={Tablet === true ? "flex-start" : 'center'}>
                <Stepper activeStep={activeStep} connector={<StepperConnector/>}>
                    {steps.map((step) => (
                        <Step
                            key={step.id}
                            completed={completed[step.id]}
                            sx={{ padding: "unset",
                                cursor:step.id === 3 ? "not-allowed": "pointer"
                            }}

                        >
                            <StepLabel
                                StepIconComponent={
                                    Mobile === false ? ColorLibStepIconMobile : ColorLibStepIcon
                                }
                                color="inherit"
                                onClick={handleStep(step.id)}
                            />
                        </Step>
                    ))}
                </Stepper>
            </Grid>
            <Grid item xs={12} >
                <StepperContent activeStep={activeStep} steps={steps} />
            </Grid>
        </Grid>
    );
};
export default CartStepper;
