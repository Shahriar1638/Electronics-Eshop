import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Component/Login&Registration/Login";
import Registration from "../Component/Login&Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Component/HomePage/Home";
import AddProduct from "../Component/AddProduct/AddProduct";
import Cart from "../Component/MyCart/Cart";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../Component/HomePage/Products/ProductsPage";
import UpdateProduct from "../Component/ViewProductDetails/UpdateProduct";
import ProductDetails from "../Component/ViewProductDetails/ProductDetails";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>
                Promise.all([
                  fetch("https://electronics-eshop-server.vercel.app/brands"),
                  fetch("https://electronics-eshop-server.vercel.app/products"),
                ]).then((responses) =>
                  Promise.all(responses.map((response) => response.json()))
                ),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/cart/:email',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: ({params})=>fetch(`https://electronics-eshop-server.vercel.app/users/${params.email}`)
            },
            {
                path:`products/:brand_name`,
                element:<ProductsPage></ProductsPage>,
                loader:()=>fetch('https://electronics-eshop-server.vercel.app/products')
            },
            {
                path:'updateProduct/:id',
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`https://electronics-eshop-server.vercel.app/products/${params.id}`)
            },
            {
                path:'productdetails/:id',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://electronics-eshop-server.vercel.app/products/${params.id}`)
            }
        
        ]
    }
])
export default routes