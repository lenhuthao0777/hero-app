import React from "react";
import { Link, useLocation } from "react-router-dom";
const TopBar = () => {
    const location = useLocation();
    return (
        <div className="top-bar">
            <div className="container">
                <h1>Tour of Heroes</h1>
                <Link to="/" className={`btn ${location.pathname === "/" ? "btn--active" : ""}`}>
                    Dashboardsdsdsdsa
                </Link>
                <Link to="/heroes" className={`btn ${location.pathname === "/heroes" ? "btn--active" : ""}`}>
                    Heroes
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
