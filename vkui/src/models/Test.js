import {EVENT_RESULT, stats} from "./Stats";
import {questions, RESULT_1, resultVariants} from "./TestData";

let result = {};

export const startTest = () => {
    result = {};
};

export const applyQuestionAnswer = (questionId, answerId) => {
    const result_diff = questions[questionId].answers[answerId].result;

    for (const key in result_diff) {
        if (!result_diff.hasOwnProperty(key)) {
            continue;
        }

        if (!result.hasOwnProperty(key)) {
            result[key] = 0;
        }

        result[key] = result[key] + result_diff[key];
    }
};

export const getResult = () => {
    let bestIndex = RESULT_1;

    for (const key in result) {
        if (!result.hasOwnProperty(key)) {
            continue;
        }

        if (result[key] > result[bestIndex]) {
            bestIndex = key;
        }
    }

    stats(EVENT_RESULT, bestIndex);

    return resultVariants[bestIndex];
};