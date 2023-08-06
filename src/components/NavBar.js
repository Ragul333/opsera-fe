import React from "react";
import Bars from '../assets/bars.png';

const NavBar = () => {
    return <nav>
        <div>
            <img src={Bars} />
        </div>
        <div className="nav-list">
            <p className="nav-item">Dashboards</p>
            <span className="border"></span>
            <p className="nav-item">Salesforce</p>
            <p className="nav-item">Engineer Report</p>
        </div>
    </nav>
}

export default NavBar;