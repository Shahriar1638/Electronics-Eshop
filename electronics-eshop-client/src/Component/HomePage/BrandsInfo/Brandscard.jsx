import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brandscard = ({brand}) => {
    const {brand_logo,brand_name} = brand
    return (
        <Link to={`/products/${brand_name}`} state={{ brand_name }}>
            <div style={{boxShadow: '1px 1px 6px 5px rgba(0, 0, 0, 0.3)'}} className="rounded-lg border-[0.2rem] border-solid border-[#323ad9] w-full h-full bg-white flex flex-col items-center py-6">             
                <img className="h-48" src={brand_logo} alt="" />
            </div>
        </Link>
    );
};

export default Brandscard;