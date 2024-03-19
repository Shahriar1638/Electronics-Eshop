import { useLoaderData } from "react-router-dom";
import Brandscard from "./Brandscard";

const Brands = () => {
  const getJsons = useLoaderData();
  const brandsInfo = getJsons[0];
  return (
    <div className="my-28">
      <h1 className="my-20 text-center text-5xl font-bold">Explore the Wide Range of Products <br />Offered by These Brands:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {brandsInfo.map((brand) => (
          <Brandscard key={brand.brand_name} brand={brand}></Brandscard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
