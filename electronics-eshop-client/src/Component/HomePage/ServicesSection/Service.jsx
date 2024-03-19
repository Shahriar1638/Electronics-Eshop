/* eslint-disable react/no-unescaped-entities */
import icon1 from "../../../assets/customer-service.png"
import icon2 from "../../../assets/exchange.png"
import icon3 from "../../../assets/home-delivery.png"

const Service = () => {
    return (
        <div className="my-30 px-4 md:px-0">
            <h1 className="text-7xl font-extrabold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div style={{boxShadow: '1px 1px 6px 5px rgba(0, 0, 0, 0.3)'}} className="flex rounded-xl px-6 py-3 bg-slate-200 flex-col items-center">
                    <img className="w-52 mb-4" src={icon1} alt="" />
                    <h2 className="text-xl mb-4 font-semibold text-[#010326]">Friendly and Responsive Customer Support:</h2>
                    <p className="text-slate-600 text-justify">We offer fast and reliable home delivery services, ensuring that your ordered products are delivered right to your doorstep in a timely manner. Our efficient delivery network is designed to get your purchases to you as quickly as possible, so you can start enjoying them without delay.</p>
                </div>
                <div style={{boxShadow: '1px 1px 6px 5px rgba(0, 0, 0, 0.3)'}} className="flex rounded-xl px-6 py-3 bg-slate-200 flex-col items-center">
                    <img className="w-52 mb-4" src={icon2} alt="" />
                    <h2 className="text-xl mb-4 font-semibold text-[#010326]">7-Day Hassle-Free Return and Exchange:</h2>
                    <p className="text-slate-600 text-justify">We understand that sometimes a product may not meet your expectations. That's why we provide a 7-day hassle-free return and exchange policy. If you're not completely satisfied with your purchase, you can easily initiate a return or exchange within seven days of receiving your order, with no questions asked.</p>
                </div>
                <div style={{boxShadow: '1px 1px 6px 5px rgba(0, 0, 0, 0.3)'}} className="flex rounded-xl px-6 py-3 bg-slate-200 flex-col items-center">
                    <img className="w-52 mb-4" src={icon3} alt="" />
                    <h2 className="text-xl mb-4 font-semibold text-[#010326]">Fast and Reliable Home Delivery:</h2>
                    <p className="text-slate-600 text-justify">We pride ourselves on our friendly and responsive customer support team. If you have any questions, concerns, or need assistance with your order, our dedicated support team is here to help. Whether you prefer to reach out via chat, email, or phone, we're committed to providing you with the best customer service experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;