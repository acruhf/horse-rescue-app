import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return <nav>
        <h4><Link to-="/">Home</Link></h4>
        <h4><Link to-="/addnewhorse">Add a new horse!</Link></h4>
    </nav>
}

export default Navbar