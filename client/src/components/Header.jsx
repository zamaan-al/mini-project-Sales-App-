import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
        <nav className="flex gap-6 h-20 p-5 bg-fuchsia-300 text-2xl font-semibold items-center">
           
            <div className="shadow-lg px-4 py-2 rounded-lg hover:bg-fuchsia-500 transition duration-300">
                <Link to="/post-sales" className="text-white hover:text-yellow-200">
                    Post Sales
                </Link>
            </div>
    
            
            <div className="shadow-lg px-4 py-2 rounded-lg hover:bg-fuchsia-500 transition duration-300">
                <Link to="/sales" className="text-white hover:text-yellow-200">
                    View Sales
                </Link>
            </div>
        </nav>
    </div>
    );
};

export default Header;
