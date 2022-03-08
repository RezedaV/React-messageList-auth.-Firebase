import {FETCH_STATUSES} from "../../UTILS/constants";

export const selectPhotos = (state) => state.photos.data;
export const selectPhotosLoading = (state) =>
    state.photos.status ===FETCH_STATUSES.REQUEST;

export const selectError = (state) => state.photos.error;