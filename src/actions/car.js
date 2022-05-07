import { ADD_CAR, DELETE_CAR } from "./types";

export const addCar = (car) =>(
    {
        type: ADD_CAR,
        data: car
    }
)
export const deleteCar = (key) =>(
    {
        type: DELETE_CAR,
        key: key
    }
)