import {FINISH_FETCH_FEED, START_FETCH_FEED, FAILED_FETCH_FEED} from "../constants";

const initialState = {
    loadingFeed: false,
    feeds: [],
    error: null
};

function feedReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCH_FEED:
            return {
                ...state,
                loadingFeed: true,
                error: null
            };
        case FINISH_FETCH_FEED:
            return {
                ...state,
                loadingFeed: false,
                feeds: action.payload
            };
        case FAILED_FETCH_FEED:
            return {
                ...state,
                loadingFeed: false,
                feeds: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export default feedReducer;
