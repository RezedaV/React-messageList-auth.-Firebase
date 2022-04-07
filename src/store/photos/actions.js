import { apiUrlPhotos} from "../../UTILS/constants";

export  const GET_PHOTOS_REQUEST = 'ARTICLES::GET_PHOTOS_REQUEST';
export  const GET_PHOTOS_SUCCESS = 'ARTICLES::GET_PHOTOS_SUCCESS';
export  const GET_PHOTOS_FAILURE = 'ARTICLES::GET_PHOTOS_FAILURE';

export const getPhotosRequest = () => ({
    type: GET_PHOTOS_REQUEST,
});

export const getPhotosSuccess = (photos) => ({
    type: GET_PHOTOS_SUCCESS,
    payload: photos,
});

export const getPhotosFailure = (error) => ({
    type: GET_PHOTOS_FAILURE,
    payload: error,
});

export const getPhotos = () => async (dispatch) => {
    dispatch(getPhotosRequest());
    try {
        const response = await fetch(apiUrlPhotos);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        dispatch(getPhotosSuccess(result))
    } catch(err){
        dispatch(getPhotosFailure(err))
        console.warn(err)
    } 
}