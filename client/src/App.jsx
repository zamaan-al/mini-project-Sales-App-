import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import SalesPost from "./pages/salesPost";
import Sales from "./pages/Sales";
import UpdateSale from "./pages/UpdateSale";





function App() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Header />
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post-sales" element={<SalesPost/>} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/updateSale" element={<UpdateSale/>} />
            </Routes>
        </>
    );
}

export default App;
