import React, { useState } from "react";
import { Link } from "react-router-dom";
const TopBar = () => {
  const [btnActive, setBtnActive] = useState(0)
    return (
        <div className="top-bar">
            <div className="container">
                <h1>Tour of Heroes</h1>
                <Link to="/" className={`btn ${btnActive === 1 ? "btn--active" : ""}`} onClick={()=>setBtnActive(1)}>Dashboard</Link>
                <Link to="/heroes" className={`btn ${btnActive === 2 ? "btn--active" : ""}`} onClick={()=>setBtnActive(2)}>Heroes</Link>
            </div>
        </div>
    );
};

export default TopBar;
