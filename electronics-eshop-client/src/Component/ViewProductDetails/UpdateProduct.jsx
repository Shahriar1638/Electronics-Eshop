import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
/* eslint-disable react/no-unescaped-entities */
const UpdateProduct = () => {

  const product = useLoaderData();
  const {_id,rating, brandName,productName,price,photoURL, productType ,shortDescription} = product
  const hangleUpdateProduct = e => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value
    const productName = form.productName.value
    const brandName = form.brandName.value
    const productType = form.productType.value
    const rating = form.rating.value
    const price = form.price.value
    const updatedProduct = {photoURL,price,productName,productType,shortDescription,rating,brandName}
    fetch(`https://electronics-eshop-server.vercel.app/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(updatedProduct) 
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Product Updated',
                                'You success fully updated the product',
                                'success'
                              )
                            form.reset();
                        }})  
  }
  return (
    <div className="my-52 px-4 md:px-6">
      <h1 className="text-5xl font-bold text-left my-16">
        Update {productName} Information:
      </h1>
      <form onSubmit={hangleUpdateProduct} className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10 py-8 border-x-4 rounded-xl border-[#7c05f2] px-6">
                <div className="">
                    <h1 className="mb-4 text-lg font-semibold">Product Image</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="photoURL" id="012" defaultValue={photoURL} placeholder="Product image url...."/>     
                    <h1 className="mb-4 text-lg font-semibold">Product Name</h1>    
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="productName" id="011" defaultValue={productName} placeholder="Product name...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Brand</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="brandName" id="011" defaultValue={brandName} placeholder="Brand Name...." required/>                               
                </div>
                <div>
                    <h1 className="mb-4 text-lg font-semibold">Product Type</h1>                               
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="productType" id="011" defaultValue={productType} placeholder="type of product...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Rating</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="rating" id="011" defaultValue={rating} placeholder="Rating...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Price</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="price" id="011" defaultValue={price} placeholder="Price...." required/>
                </div>
                <input className="btn btn-primary md:col-span-2 mb-4 text-white w-full bg-[#7c05f2] border-none" type="submit" value="UPDATE PRODUCT"/>
            </form> 
    </div>
  );
};

export default UpdateProduct;
