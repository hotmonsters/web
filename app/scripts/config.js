import _ from 'underscore';
import env from './env.js';

var defaultConfig = {
    apiRoot: "http://localhost:5000",
}

var herokuConfig = {
    apiRoot: 'https://hotmonsters.herokuapp.com',
}

var config = defaultConfig;

console.log(env);
if (env.env == 'production') {
    config = _.extend(herokuConfig);
}

export default config;
