import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Components/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
                element: <Dashboard></Dashboard>
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