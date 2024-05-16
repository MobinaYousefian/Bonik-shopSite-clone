import RemoveIcon from "@mui/icons-material/Remove";
import {PMButton} from "@/style/style";
import {decreaseItem} from "@/redux/features/cartSlice";

const MinusButton = ({ number, product, dispatch }) => {
    return (
        <>
            {number === 1 ? (
                <PMButton disabled>
                    <RemoveIcon />
                </PMButton>
            ) : (
                <PMButton onClick={() => dispatch(decreaseItem(product))}>
                    <RemoveIcon />
                </PMButton>
            )}
        </>
    );
};

export default MinusButton;
