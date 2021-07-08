import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from '../constants.js';

function logger(log, type = 'log') {
    console[type](log)
}

export default logger;