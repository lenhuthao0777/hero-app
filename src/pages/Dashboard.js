import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { data } = useSelector((state) => state.PersonReducer);
    return (
        <div className="dashboard">
            <div className="container">
                <h2>Top Heroes</h2>
                <div className="dashboard__list">
                    {data.slice(1, 5).map((item) => (
                        <Link key={item.id} to={`/detail/${item.id}`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
