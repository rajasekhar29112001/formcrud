import React from "react";
import { Link } from "react-router";

const NavBar = () => {
    return(
        <>
            <nav class="nav">
                <ul>
                    <Link to="/"><li>Form</li></Link>
                    <Link to="/details"><li>Details</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;