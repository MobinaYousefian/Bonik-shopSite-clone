import {ColorLibConnector} from "@/section/cart/CartStepperStyle";

const StepperConnector = () => {
    return (
        <ColorLibConnector
            sx={{
                width: "10px",
                display: "none",
                '@media (min-width: 700px)': {
                    width: "50px",
                },
                '@media (min-width: 500px)': {
                    display : "inline-block"
                }
            }}
        />
    );
};
export default StepperConnector;
