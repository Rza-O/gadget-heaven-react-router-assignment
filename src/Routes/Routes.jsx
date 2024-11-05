import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProductsDetails from "../Pages/ProductsDetails";
import Dashboard from "../Pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <Home></Home>
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