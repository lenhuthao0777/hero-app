import { UPDATE_PERSON, SELECTED_PERSON } from "../constants/ActionTypes";
const initialState = {
    data: [
        { id: 11, name: "Dr Nice" },
        { id: 12, name: "Narco" },
        { id: 13, name: "Bombasto" },
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" },
        { id: 17, name: "Dynama" },
        { id: 18, name: "Dr IQ" },
        { id: 19, name: "Magma" },
        { id: 20, name: "Tornado" },
    ],
    selectedData: {},
};
function PersonReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_PERSON:
            state.selectedData = { ...action.data };
            return { ...state };
        case UPDATE_PERSON:
            let newData = action.payload.data;
            let index = state.data.findIndex((item) => item.id === newData.id);
            if (index >= 0) {
                state.data[index] = newData;
            }
            return { ...state };
        default:
            return state;
    }
}
export default PersonReducer;
