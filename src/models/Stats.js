export const EVENT_INIT = 'init';
export const EVENT_START = 'start';
export const EVENT_ANSWER = 'answer';
export const EVENT_RESULT = 'result';
export const EVENT_RETRY = 'retry';


export const stats = (type, value = null) => {
    // todo: call some api
    console.log(type, value);
};