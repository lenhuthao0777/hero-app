import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SELECTED_PERSON } from "../constants/ActionTypes";
const Heroes = () => {
    const { data, selectedData } = useSelector((state) => state.PersonReducer);
    const [showDetail, setShowDetail] = useState(false);
    const dispatch = useDispatch();
    const selected = (item) => {
        setShowDetail(true);
        dispatch({
            type: SELECTED_PERSON,
            data: item,
        });
    };
    return (
        <div className="heroes">
            <div className="container">
                <h2>My Heroes</h2>
                <ul>
                    {data.map((item) => (
                        <li key={item.id} onClick={() => selected(item)}>
                            <span>{item.id}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>
                {showDetail ? (
                    <div className="select">
                        <h2>{selectedData.name} is My Heroes</h2>
                        <Link to={`/detail/${selectedData.id}`}>View Detail</Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Heroes;
