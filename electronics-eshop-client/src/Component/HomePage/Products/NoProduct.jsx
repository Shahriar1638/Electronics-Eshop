import { Link, useLocation } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import ops from "../../../assets/opsy.png"
const NoProduct = () => {
  const loca = useLocation();
  const brand_name = loca.state.brand_name;
  return (
    <div className="my-52">
      <Link to={`/`} style={{boxShadow: '2px 3px 2px 2px rgba(0, 0, 0, 0.3)'}} className="flex w-72 flex-row items-center ml-40 px-4 py-2 rounded-md"><AiOutlineDoubleLeft className="text-2xl"></AiOutlineDoubleLeft><h1 className="ml-10 text-xl font-semibold">Go Back Home</h1></Link>
      <div className="flex flex-col my-20 items-center">
        <img className="h-40" src={ops} alt="" />
        <h1 className="text-center text-5xl my-5 font-bold">Oops....!</h1>
        <p className="text-center text-2xl my-6 font-semibold text-slate-500">
          We regret to inform you that {brand_name} products are currently
          unavailable.
          <br />
          However, you have the option to add a new product to our inventory.
        </p>
        <Link to="/addproduct" className="my-5">
          <button className="bg-[#c55cf2] font-bold text-white rounded-lg px-6 py-3">
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoProduct;
