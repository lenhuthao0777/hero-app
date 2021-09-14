import React, { useState } from "react";

const TopBar = () => {
  const [btnActive, setBtnActive] = useState(0)
    return (
        <div className="top-bar">
            <div className="container">
                <h1>Tour of Heroes</h1>
                <button className={`btn ${btnActive === 1 ? "btn--active" : ""}`} onClick={()=>setBtnActive(1)}>Dashboard</button>
                <button className={`btn ${btnActive === 2 ? "btn--active" : ""}`} onClick={()=>setBtnActive(2)}>Heroes</button>
            </div>
        </div>
    );
};

export default TopBar;
