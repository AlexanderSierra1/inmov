import { createStore,combineReducers } from "redux";

import carReducer from './reducer/carReducer'

const rootReducer = combineReducers({
    carReducer: carReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;1