import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export {routes};