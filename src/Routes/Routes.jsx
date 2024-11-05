import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProductsDetails from "../Pages/ProductsDetails";
import Dashboard from "../Pages/Dashboard";
import ProductCards from "../Components/ProductCards";

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
                path: '/details',
                element: <ProductsDetails></ProductsDetails>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export {routes};