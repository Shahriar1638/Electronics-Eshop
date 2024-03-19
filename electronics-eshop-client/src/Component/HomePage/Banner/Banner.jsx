import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const getJsons = useLoaderData();
    const brandsInfo = getJsons[0];
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="mb-16">
            <h1 className="text-center text-7xl font-semibold my-12">Explore Our Featured Brand:</h1>
            <Slider {...settings}>
                {brandsInfo.map((data, index) => (
                    <div key={index}>
                        <div style={{backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),url(${data.brand_banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%', 
                        height: '70vh'}} className="flex flex-col justify-center">
                            <div className="my-6 lg:ml-10 lg:w-2/5 rounded-xl text-center text-white py-12 px-24">
                                <h2 className="text-4xl mb-4 font-bold pb-2 border-b">{data.brand_name.toUpperCase()}</h2>
                                <p className="text-xl font-medium text-white"> {data.brand_description}</p>
                            </div>
                        </div>                        
                    </div>
                ))}
            </Slider>          
        </div>
    );
};

export default Banner;