import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";

const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const product = useLoaderData()
    const {_id,rating, brandName,productName,price,photoURL, productType ,shortDescription} = product
    
    const handleCart = (product,email) => {
        const addToCart = {email,product}
        fetch(`https://electronics-eshop-server.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
            const foundDuplicate = data.cart.find(item => item._id === _id)
            if(foundDuplicate){
                Swal.fire(
                    'Cannot add!',
                    'This product is already in your cart',
                    'warning'
                    )
                return
            } else {
                fetch(`https://electronics-eshop-server.vercel.app/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(addToCart) 
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Thank You for Your Purchase!',
                                'Your order has been successfully placed.',
                                'success'
                              )
                            
                        }})
            }
        }) 
    }
    return (
        <div style={{boxShadow: '3px 5px 8px 7px rgba(0, 0, 0, 0.3)',}} className="my-52 px-4 md:px-6 bg-slate-300 rounded-xl p-4 relative mx-4 md:mx-0">
            <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3 h-full">
                <div className="">
                    <img className="h-full w-full" src={photoURL} alt="" />
                </div>
                <div className="md:col-span-2 border-solid md:border-r-4 border-[#7c05f2] rounded-xl px-6 mt-10">
                    <h1 className="text-2xl font-bold bg-[#c55cf2] rounded-md py-3 text-white pl-4 mb-6">{productName}</h1>
                    <div  className="mb-4 flex flex-row items-center flex-wrap gap-6">
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Brand: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{brandName}</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Ratings: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{rating}</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Price <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{price}$</span></span></h3>
                        <h3><span className="text-white bg-[#010326] px-4 py-2 rounded-md">Type: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{productType}</span></span></h3>
                    </div>
                    <p className="text-slate-500 font-semibold mb-6">{shortDescription}</p>
                    <button onClick={()=>handleCart(product,user.email)} className="px-4 flex-row flex items-center py-2 rounded-lg bg-[#7c05f2] text-white font-bold text-lg md:absolute md:bottom-4"><FaShoppingCart className="mr-2"></FaShoppingCart>  Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;