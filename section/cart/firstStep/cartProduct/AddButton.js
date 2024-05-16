import AddIcon from "@mui/icons-material/Add";
import {PMButton} from "@/style/style";
import {addToCart} from "@/redux/features/cartSlice";

const AddButton = ({product,dispatch }) => {
    return (
        <PMButton onClick={() => dispatch(addToCart(product))}>
            <AddIcon/>
        </PMButton>
    );
};

export default AddButton;
