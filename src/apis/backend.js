import {feed} from "./endpointConfig";
import axios from "axios";

const globalConfig = {headers: {'Content-Type': 'application/json'}};

export const getFeed = url => axios.get(feed(), { ...globalConfig, params: {url} });
