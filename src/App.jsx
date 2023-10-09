import { ToastContainer } from "react-toastify";
import { HomePage } from "./components/HomePage";
import { list } from "./utils/array";

import "react-toastify/dist/ReactToastify.min.css";

export function App() {
    return (
        <div>
            <HomePage aluminumProfileList={list} />
            <ToastContainer />
        </div>
    );
}
