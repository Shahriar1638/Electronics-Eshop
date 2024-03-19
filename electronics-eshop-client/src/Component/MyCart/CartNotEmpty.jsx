// import { useState } from "react";
import CartCards from "./CartCards";

/* eslint-disable react/prop-types */
const CartNotEmpty = ({displayCart}) => {
    
    let totalCost = 0;
    displayCart.forEach(product => {
    totalCost += parseInt(product.price);
    });


    return (
        <div className="my-52">
            <h1 className="text-5xl font-extrabold text-[#010326] text-center my-20">Total Cost: {totalCost}$</h1>
            <div className="flex flex-col items-center">
                {
                    displayCart.map(product => <CartCards key={product._id} product={product}></CartCards>)
                }
            </div>
        </div>
    );
};

export default CartNotEmpty;