import {
    GET_PHOTOS_FAILURE,
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS
} from "./actions";
import {FETCH_STATUSES} from "../../UTILS/constants";

const initialState = {
    data: [],
    error: null,
    status: FETCH_STATUSES.IDLE,
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PHOTOS_REQUEST:{
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
            };
        }
        case GET_PHOTOS_SUCCESS:{
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS,
            };
        }
        case GET_PHOTOS_FAILURE:{
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: action.payload,
            };
        }

        default:
            return state
    }
}