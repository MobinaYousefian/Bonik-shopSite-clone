'use client'
import {useDispatch, useSelector} from "react-redux";
import CartProduct from "@/section/cart/firstStep/cartProduct/CartProduct";

const CartProductList = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <>
            {items.map((product) => (
                <CartProduct
                    image={product.images[0].image}
                    number={items.filter((i) => i.id === product.id)[0].count}
                    price={product.price}
                    name={product.name}
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                />
            ))}
        </>
    );
};

export default CartProductList;
