import App from "./App";
import ErrorPage from "./ErrorPage"
import Products from "./Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

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
            }
        ]
    },
    {

    }
]

export default routes;