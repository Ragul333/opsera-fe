import React from "react";
import Bars from '../assets/bars.png';
import { navList } from "../contstants";

const NavBar = () => {
    return <nav>
        <div>
            <img src={Bars} />
        </div>
        <div className="nav-list">
            {
                navList.map((data)=>{
                    return <p className="nav-item">{data}</p>
                })
            }
        </div>
    </nav>
}

export default NavBar;