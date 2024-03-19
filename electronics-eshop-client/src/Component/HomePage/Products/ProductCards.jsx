import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCards = ({product}) => {
    const {_id,rating, brandName,productName,price,photoURL} = product
    return (
        <div style={{boxShadow: '2px 5px 6px 3px rgba(0, 0, 0, 0.3)',}} className="w-full rounded-lg py-8 px-20">
            <h2 className="text-center mb-6 bg-[#c55cf2] font-bold py-2 rounded-xl text-white">BRAND: {brandName}</h2>
            <div className="items-center flex flex-col">        
                <img className="h-64 mb-4" src={photoURL} alt="" />
                <h1 className="text-xl font-semibold mb-3">{productName}</h1>         
                <div className="flex flex-row items-center mb-4">
                    <h3 className="text-[#6e6e6e] font-bold mr-6">Rating: {rating}</h3>
                    <h3 className="text-[#6e6e6e] font-bold">Price: {price}$</h3>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-12 ">
                    <Link to={`/updateProduct/${_id}`}><button className="bg-[#c55cf2] w-full font-bold text-white rounded-lg px-4 py-2">Update</button></Link>
                    <Link to={`/productdetails/${_id}`}><button className="bg-[#c55cf2] w-full font-bold text-white rounded-lg px-4 py-2">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;