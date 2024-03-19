import Banner from "./Banner/Banner";
import Brands from "./BrandsInfo/Brands";
import Service from "./ServicesSection/service";

const Home = () => {
    return (
        <div className="mt-52">
            <Banner></Banner>
            <Brands></Brands>
            <Service></Service>
        </div>
    );
};

export default Home;