import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Heroes = () => {
    const { data } = useSelector((state) => state.DashboardReducer);
    return (
        <div className="heroes">
            <div className="container">
                <h2>My Heroes</h2>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <span>{item.id}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div className="select">
                    <h2>test</h2>
                    <Link to="/detail">View Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default Heroes;
