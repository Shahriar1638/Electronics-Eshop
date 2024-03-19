import { useLoaderData, useLocation } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";
import NoProduct from "./NoProduct";

const ProductsPage = () => {
  const [exist, setExist] = useState(false);
  const loca = useLocation()
  const brand_name = loca.state.brand_name;
  const productDatas = useLoaderData();
  useEffect(()=> {
    const matchingProducts = productDatas.find(
        (product) => product.brandName === brand_name
      );
    if(matchingProducts){
        setExist(true)
    }else{
        setExist(false)
    }
  },[brand_name,productDatas])
  return (
    <div>
        { 
            exist?<Products></Products>:<NoProduct></NoProduct>
        }
    </div>
  );
};

export default ProductsPage;
