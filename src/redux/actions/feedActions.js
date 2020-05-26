import {getFeed} from "../../apis/backend";
import {FAILED_FETCH_FEED, FINISH_FETCH_FEED, START_FETCH_FEED} from "../constants";

const startFetchFeed = () => ({
    type: START_FETCH_FEED
});

const finishFetchFeed = (data) => ({
    type: FINISH_FETCH_FEED,
    payload: data
});

const showError = ({response}) => ({
    type: FAILED_FETCH_FEED,
    payload: "Failed to fetch feed."
});

export const fetchFeed = (url) => dispatch => {
    dispatch(startFetchFeed());
    return getFeed(url).then(({data, status}) => {
        if (status === 200) {
            dispatch(finishFetchFeed(data));
        }
    }).catch(e => dispatch(showError(e)));
};
