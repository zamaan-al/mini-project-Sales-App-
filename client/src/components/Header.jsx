import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
        <nav className="flex gap-6 h-20 p-5 bg-fuchsia-300 text-2xl font-semibold items-center">
           
            <div className="shadow-lg px-4 py-2 rounded-lg hover:bg-fuchsia-500 transition duration-300">
                <Link to="/post-student" className="text-white hover:text-yellow-200">
                    Create Student
                </Link>
            </div>
    
            
            <div className="shadow-lg px-4 py-2 rounded-lg hover:bg-fuchsia-500 transition duration-300">
                <Link to="/students" className="text-white hover:text-yellow-200">
                    View Students
                </Link>
            </div>
        </nav>
    </div>
    );
};

export default Header;
