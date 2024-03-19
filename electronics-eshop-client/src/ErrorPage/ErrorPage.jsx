import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-5xl text-center font-bold my-8">404 - Page Not Found. <br /> <br /> The page you are looking for does not exist.</h1>
                <button className="btn btn-primary"><Link to='/'>Go back Home</Link></button>
        </div>
    );
};

export default ErrorPage;