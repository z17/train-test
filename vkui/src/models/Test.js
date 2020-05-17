import {EVENT_RESULT, stats} from "./Stats";

const RESULT_ONE = 'key_one';
const RESULT_TWO = 'key_two';
const RESULT_THREE = 'key_three';

export const questions = [
    {
        id: 1,
        text: 'Что с этим делать?',
        answers: [
            {
                text: "first answer",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: -1,
                    [RESULT_THREE]: 0,
                }
            },
            {
                text: "the second one",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 1,
                }
            },
            {
                text: "and the last",
                result: {
                    [RESULT_ONE]: -2,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 0,
                }
            },
        ]
    },
    {
        id: 2,
        text: 'Что с этим делать?',
        answers: [
            {
                text: "first answer",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: -1,
                    [RESULT_THREE]: 0,
                }
            },
            {
                text: "the second one",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 1,
                }
            },
            {
                text: "and the last",
                result: {
                    [RESULT_ONE]: -2,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 0,
                }
            },
        ]
    },
    {
        id: 3,
        text: 'Что с этим делать?',
        answers: [
            {
                text: "first answer",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: -1,
                    [RESULT_THREE]: 0,
                }
            },
            {
                text: "the second one",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 1,
                }
            },
            {
                text: "and the last",
                result: {
                    [RESULT_ONE]: -2,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 0,
                }
            },
        ]
    },
    {
        id: 4,
        text: 'Что с этим делать?',
        answers: [
            {
                text: "first answer",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: -1,
                    [RESULT_THREE]: 0,
                }
            },
            {
                text: "the second one",
                result: {
                    [RESULT_ONE]: 1,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 1,
                }
            },
            {
                text: "and the last",
                result: {
                    [RESULT_ONE]: -2,
                    [RESULT_TWO]: 1,
                    [RESULT_THREE]: 0,
                }
            },
        ]
    }
];

const resultVariants = {
    [RESULT_ONE]: {
        title: "Тупой вагон",
        text: "Круто! Ты -- тупой вагон",
        image: "https://sun9-46.userapi.com/JMyb1DQ01jLIugxRasCxk22k_XbRDgXPfRAMiA/LSZEn2_o55E.jpg",
        attachment: "photo19273718_457242794"
    },
    [RESULT_TWO]: {
        title: "Стрёмный вагон",
        text: "Ну такое себе, ты всего лишь стрёмный вагон",
        image: "https://sun9-46.userapi.com/JMyb1DQ01jLIugxRasCxk22k_XbRDgXPfRAMiA/LSZEn2_o55E.jpg",
        attachment: "photo19273718_457242794"
    },
    [RESULT_THREE]: {
        title: "Бесполезный вагон",
        text: "Ты -- бесполезный вагон",
        image: "https://sun9-46.userapi.com/JMyb1DQ01jLIugxRasCxk22k_XbRDgXPfRAMiA/LSZEn2_o55E.jpg",
        attachment: "photo19273718_457242794"
    },
};

const result = {
    [RESULT_ONE]: 0,
    [RESULT_TWO]: 0,
    [RESULT_THREE]: 0,
};

export const applyQuestionAnswer = (questionId, answerId) => {
    const result_diff = questions[questionId].answers[answerId].result;

    for (const key in result_diff) {
        if (!result_diff.hasOwnProperty(key) || !result.hasOwnProperty(key)) {
            continue;
        }

        result[key] = result[key] + result_diff[key];
    }
};

export const getResult = () => {
    let bestIndex = RESULT_ONE;

    for (const key in result) {
        if (result[key] > result[bestIndex]) {
            bestIndex = key;
        }
    }

    stats(EVENT_RESULT, bestIndex);

    return resultVariants[bestIndex];
};