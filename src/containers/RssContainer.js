import React from "react";
import {connect} from "react-redux";

import {fetchFeed} from "../redux/actions/feedActions";

import Rss from "../components/rss/Rss";

const RssContainer = ({
                            loading,
                            feeds,
                            error,

                            fetchFeed,
                        }) => {
    return <Rss onFetch={fetchFeed} items={feeds} error={error} loading={loading}/>

};

export default connect(
    state => ({
        loading: state.feeds.loadingFeed,
        feeds: state.feeds.feeds,
        error: state.feeds.error
    }),
    {
        fetchFeed,
    }
)(RssContainer);
