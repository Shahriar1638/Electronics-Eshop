/* eslint-disable react/prop-types */
const CartCards = ({product}) => {
    const {rating, brandName,productName,price,photoURL, productType ,shortDescription} = product
    return (
        <div style={{boxShadow:'3px 5px 8px 7px rgba(0, 0, 0, 0.3)'}} className="my-20 px-4 md:px-6 bg-[#c55cf2] rounded-xl p-4 relative mx-4">
            <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3 h-full">
                <div className="">
                    <img className="h-full w-full" src={photoURL} alt="" />
                </div>
                <div className="md:col-span-2 rounded-xl px-6 mt-10">
                    <h1 className="text-2xl font-bold bg-white rounded-md py-3 text-[#010326] pl-4 mb-6">{productName}</h1>
                    <div  className="mb-4 flex flex-row items-center flex-wrap gap-6">
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Brand: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{brandName}</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Ratings: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{rating}</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Price <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{price}$</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Type: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{productType}</span></span></h3>
                    </div>
                    <p className="text-slate-500 font-semibold mb-6 bg-white px-6 py-4 rounded-lg">{shortDescription}</p>
                </div>

            </div>
        </div>
    );
};

export default CartCards;