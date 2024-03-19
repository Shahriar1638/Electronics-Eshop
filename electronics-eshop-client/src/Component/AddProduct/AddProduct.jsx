/* eslint-disable react/no-unescaped-entities */
import Swal from 'sweetalert2'
const AddProduct = () => {
    const hangleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photoURL.value
        const productName = form.productName.value
        const brandName = form.brandName.value
        const productType = form.productType.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value
        const price = form.price.value
        const addproduct = {photoURL,price,productName,productType,shortDescription,rating,brandName}
        console.log(addproduct)
        fetch('https://electronics-eshop-server.vercel.app/products', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(addproduct) 
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire(
                                'Product Added',
                                'You success fully added a product',
                                'success'
                              )
                            form.reset();
                        }})
    }
    return (
        <div className="px-4 my-40">
            <h1 className="text-5xl font-bold text-left my-16">Want to add a product in our database? <br />Let's get started by filling out the form below:</h1>          
            <form onSubmit={hangleAddProduct} className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10 py-8 border-x-4 rounded-xl border-[#7c05f2] px-6">
                <div className="">
                    <h1 className="mb-4 text-lg font-semibold">Product Image</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="photoURL" id="012" placeholder="Product image url...."/>     
                    <h1 className="mb-4 text-lg font-semibold">Product Name</h1>    
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="productName" id="011" placeholder="Product name...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Brand</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="brandName" id="011" placeholder="Brand Name...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Type</h1>                               
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="productType" id="011" placeholder="type of product...." required/>                               
                </div>
                <div>
                    <h1 className="mb-4 text-lg font-semibold">Short Description About Product</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="shortDescription" id="011" placeholder="Short description...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Rating</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="rating" id="011" placeholder="Rating...." required/>
                    <h1 className="mb-4 text-lg font-semibold">Product Price</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#c55cf2] px-6 py-3 w-full" type="text" name="price" id="011" placeholder="Price...." required/>
                </div>
                <input className="btn btn-primary md:col-span-2 mb-4 text-white w-full bg-[#7c05f2] border-none" type="submit" value="ADD PRODUCT"/>
            </form> 
        </div>
    );
};

export default AddProduct;