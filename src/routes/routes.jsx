import App from "../components/App";
import ErrorPage from "../Pages/ErrorPage"
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";

const routes = [
    {
        path:"/",
        element:<App />,
        errorElement: <ErrorPage />,

        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"products",
                element : <Products />
            },
            {
                path:"products/:id",
                element:<ProductDetails />
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"checkout",
                element:<Checkout/>
            }
        ]
    },
    {

    }
]

export default routes;