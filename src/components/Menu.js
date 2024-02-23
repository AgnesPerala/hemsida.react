import React from "react";
import {Link} from "react-router-dom";
import "./Menu.css"

const Menu=() =>{
    return(
        <div className="menu">
        <p id ="logo">Agnes Perälä</p>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/Portfolio"}>
                        Portfolio
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Menu;