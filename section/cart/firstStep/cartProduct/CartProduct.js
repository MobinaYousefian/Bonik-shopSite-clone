import Image from "next/image";
import { forwardRef } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {removeItem} from "@/redux/features/cartSlice";
import {
    CustomBox,
    CustomGridColumn,
    CustomGridRow,
    PaperCustom, TypographyCount,
    TypographyMain
} from "@/section/cart/firstStep/cartProduct/CartProductStyle";
import AddButton from "@/section/cart/firstStep/cartProduct/AddButton";
import MinusButton from "@/section/cart/firstStep/cartProduct/MinusButton";
import CartImage from "@/section/cart/firstStep/cartProduct/CartImage";
import CartInfo from "@/section/cart/firstStep/cartProduct/CartInfo";

const CartProduct = ({ image, number, price, name, product, dispatch }) => {
    // eslint-disable-next-line react/display-name
    const SelectedProduct = forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Image src={product.images[0].image} alt={"image"}/>
            </a>
        );
    });

    return (
        <PaperCustom>
            <CustomGridRow container justifyContent="space-between">
                <CartImage image={image} product={product} />
                <CustomGridColumn item container xs={12} sm={9.7} p="20px">
                    <CustomGridRow item container justifyContent="space-between" xs={12}>
                        <TypographyMain>{name}</TypographyMain>
                        <CustomBox
                            display={"none"}
                            sx={{
                                '@media (min-width: 750px)': {
                                    display: "block"
                                },
                            }}
                            onClick={() => dispatch(removeItem(product))}
                        >
                            <CloseOutlinedIcon />
                        </CustomBox>
                    </CustomGridRow>
                    <CustomGridRow item container justifyContent="space-between">
                        <CartInfo number={number} price={price} product={product}/>
                        <CustomGridRow
                            item
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                            xs={6}
                        >
                            <MinusButton number={number} product={product} dispatch={dispatch}/>
                            <TypographyCount>{number}</TypographyCount>
                            <AddButton product={product} dispatch={dispatch}/>
                        </CustomGridRow>
                    </CustomGridRow>
                </CustomGridColumn>
            </CustomGridRow>
        </PaperCustom>
    );
};

export default CartProduct;