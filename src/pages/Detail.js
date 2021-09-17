import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { UPDATE_PERSON } from "../constants/ActionTypes";
const Detail = () => {
    const { data } = useSelector((state) => state.PersonReducer);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const detailPerson = data.filter((val) => {
        return val.id === parseInt(id);
    });
    const [personData, setPersonData] = useState({
        id: parseInt(id),
        name: detailPerson[0].name,
    });
    const handleForm = (e) => {
        e.preventDefault();
        dispatch({
            type: UPDATE_PERSON,
            payload: {
                data: personData,
            },
        });
        history.push("/");
    };
    const onChangeData = (e) => {
        const newData = { ...personData };
        newData[e.target.name] = e.target.value;
        setPersonData(newData);
    };

    return (
        <div className="detail">
            <div className="container">
                <h2>{personData.name} Detail</h2>
                <form action="" onSubmit={handleForm}>
                    <div className="form__input">
                        <label htmlFor="">id:</label>
                        <span>{detailPerson[0].id}</span>
                    </div>
                    <div className="form__input">
                        <label htmlFor="">name:</label>
                        <input type="text" name="name" value={personData.name} onChange={onChangeData} />
                    </div>
                    <button>Back</button>
                </form>
            </div>
        </div>
    );
};

export default Detail;
