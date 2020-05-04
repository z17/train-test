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
    [RESULT_ONE]: "Круто! Ты -- тупой вагон",
    [RESULT_TWO]: "Ну такое себе, ты всего лишь стрёмный вагон",
    [RESULT_THREE]: "Ты -- бесполезный вагон",
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

export const getResultText = () => {
    let bestIndex = RESULT_ONE;

    for (const key in result) {
        if (result[key] > result[bestIndex]) {
            bestIndex = key;
        }
    }

    return resultVariants[bestIndex];
};