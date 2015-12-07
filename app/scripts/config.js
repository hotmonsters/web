import _ from 'underscore';
import env from './env.js';

var defaultConfig = {
    apiRoot: "http://localhost:5000",
    googleAnalytics: null,
}

var herokuConfig = {
    apiRoot: 'https://hotmonsters.herokuapp.com',
    googleAnalytics: 'UA-71125007-1',
}

var config = defaultConfig;

if (env.env == 'production') {
    config = _.extend(herokuConfig);
}

export default config;
