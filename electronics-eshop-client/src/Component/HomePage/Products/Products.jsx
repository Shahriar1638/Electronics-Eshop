/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useLocation } from "react-router-dom";
import ProductCards from "./ProductCards";
import { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Products = () => {
  const [sliders, setSliders] = useState([]);
  const loca = useLocation();
  const brand_name = loca.state.brand_name;
  const productDatas = useLoaderData();
  useEffect(() => {
    const matchingProducts = productDatas.filter(
      (product) => product.brandName === brand_name
    );
    const productImages = matchingProducts
      .map((product) => product.photoURL)
      .slice(0, 3);
    setSliders(productImages);
  }, [brand_name, productDatas]);

  console.log("slider: ", sliders);
  return (
    <div className="my-36">
      <h1 className="text-5xl font-bold text-center my-20">{brand_name}'s Featured Products:</h1>
      <div style={{boxShadow: '2px 3px 7px 8px rgba(0, 0, 0, 0.3)',}}>
        <Slide>
            {
                sliders.map((images,idx)=> <div className="flex items-center justify-center cover" key={idx}><img className="h-[45rem]" src={images} alt="" /></div>)
            }
        </Slide>
      </div>
      <h1 className="my-10 text-5xl font-bold px-4 md:px-0">All Products:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {productDatas.map((product) => {
          if (product.brandName === brand_name) {
            return (
              <ProductCards key={product._id} product={product}></ProductCards>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Products;
