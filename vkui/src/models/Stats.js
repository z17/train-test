export const EVENT_INIT = 'init';
export const EVENT_START = 'start';
export const EVENT_ANSWER = 'answer';
export const EVENT_RESULT = 'result';
export const EVENT_RETRY = 'retry';
export const EVENT_POST_SHARE_CLICK = 'post_share_click';
export const EVENT_STORY_SHARE_CLICK = 'story_share_click';
export const EVENT_POST_SHARE = 'post_share';
export const EVENT_STORY_SHARE = 'story_share';

const STATS_URL = 'https://train.blweb.ru/stats';

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
