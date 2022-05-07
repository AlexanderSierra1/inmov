import { ADD_CAR, DELETE_CAR } from "../actions/types";

const initialState = {
    carList: []
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                carList: state.carList.concat({
                    data: action.data
                })
            }
        case DELETE_CAR:
            return
        default:
            return state
    }
}
export default carReducer;