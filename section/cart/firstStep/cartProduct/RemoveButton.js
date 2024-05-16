'use client'
import { useDispatch } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CustomBox } from "./CartProductStyle";
import {removeItem} from "@/redux/features/cartSlice";

const RemoveButton = ({product }) => {
    const dispatch = useDispatch();
    return (
        <CustomBox
            display={"block"}
            sx={{
                position: "absolute",
                right: "15px", top: "15px",
                '@media (min-width: 750px)': {
                    display: "none"
                },
        }}
            onClick={() => dispatch(removeItem(product))}
        >
            <CloseOutlinedIcon/>
        </CustomBox>
    );
};

export default RemoveButton;
