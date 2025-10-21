import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";
import Header from "./components/Header";


import Sales from "./pages/Students";


import StudentPost from "./pages/StudentPost";
import UpdateStudent from "./pages/UpdateStudent";
import Students from "./pages/Students";





function App() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Header />
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post-student" element={<StudentPost/>} />

                <Route path="/students" element={<Students />} />
                <Route path="/updateStudent" element={<UpdateStudent/>} />
            </Routes>
        </>
    );
}

export default App;
