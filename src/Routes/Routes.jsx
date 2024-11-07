import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Components/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import ErrorPage from "../Pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../fakeProducts.json')
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../fakeProducts.json')
                    },
                ]
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('../fakeProducts.json')
            }
        ]
    }
])

export {routes};