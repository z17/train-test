export const EVENT_INIT = 'init';
export const EVENT_START = 'start';
export const EVENT_ANSWER = 'answer';
export const EVENT_RESULT = 'result';
export const EVENT_RETRY = 'retry';

// todo: url
const STATS_URL = 'http://train.test/stats';

export const stats = (type, key1 = null, key2 = null) => {
    let body = {
        type: type,
        key1: key1,
        key2: key2
    };
    fetch(STATS_URL, {
        method: 'POST',
        body: JSON.stringify(body)
    }).catch(() => {
        console.log('fetch error');
    });
};
