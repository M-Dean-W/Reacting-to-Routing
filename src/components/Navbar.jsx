import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-dark">
        <Link to='/' className="btn btn-light m-3">Home</Link>
        <Link to='/films' className="btn btn-light m-3">View Films</Link>
        <Link to='/people' className="btn btn-light m-3">View People</Link>

        </div>
    )
}

export default Navbar;