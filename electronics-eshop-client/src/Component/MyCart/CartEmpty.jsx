/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import ops from "../../assets/opsy.png"

const CartEmpty = () => {
    return (
    <div className="my-52">
      <Link to={`/`} style={{boxShadow: '2px 3px 2px 2px rgba(0, 0, 0, 0.3)'}} className="flex w-72 flex-row items-center ml-40 px-4 py-2 rounded-md"><AiOutlineDoubleLeft className="text-2xl"></AiOutlineDoubleLeft><h1 className="ml-10 text-xl font-semibold">Go Back Home</h1></Link>
      <div className="flex flex-col my-20 items-center">
        <img className="h-40" src={ops} alt="" />
        <h1 className="text-center text-5xl my-5 font-bold">Oops! It looks like your cart is still empty</h1>
        <p className="text-center text-2xl my-6 font-semibold text-slate-500">
            Looks like you haven't added anything to your cart yet. Let's do some shopping first!
        </p>
      </div>
    </div>
    );
};

export default CartEmpty;