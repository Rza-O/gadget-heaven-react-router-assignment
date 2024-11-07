import { useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="">
            {/* <Navbar></Navbar> */}
            <div className="min-h-[400px] my-auto flex flex-col justify-center items-center text-center">
                <img src="/error404.jpg" alt="" />
                <h1>Oops... Sorry!</h1>
                <p></p>
                <p>
                    <i className="font-bold">Page {error.statusText || error.message}</i>
                </p>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
