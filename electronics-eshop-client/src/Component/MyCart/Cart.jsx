import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartNotEmpty from "./CartNotEmpty";
import CartEmpty from "./CartEmpty";

const Cart = () => {
    const userData = useLoaderData();
    const [displayCart, setDisplayCart] = useState([]);
    useEffect(()=>{
        setDisplayCart(userData.cart)
    },[userData])
    return (
        <div>
            {
                displayCart.length>0? <CartNotEmpty displayCart={displayCart}></CartNotEmpty>:<CartEmpty></CartEmpty>
            }
        </div>
    );
};

export default Cart;