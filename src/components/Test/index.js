import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Cell, Group} from '@vkontakte/vkui';

import Answer from "../Answer/index";
import {applyQuestionAnswer, questions} from "../../models/Test";
import {EVENT_ANSWER, stats} from "../../models/Stats";


const Index = ({id, go}) => {

    const [activeQuestionId, setActiveQuestionId] = useState(0);
    const activeQuestion = questions[activeQuestionId];

    const next = (event) => {
        let answerId =  event.currentTarget.dataset.answer;

        stats(EVENT_ANSWER, answerId);
        applyQuestionAnswer(activeQuestionId, answerId);

        if (activeQuestionId + 1 < questions.length) {
            setActiveQuestionId(activeQuestionId + 1);
        } else {
            go('result');
        }
    };

    return (
        <Panel id={id}>
            <Group>
                <Cell>Какой ты вагон? {activeQuestionId + 1}/{questions.length}</Cell>
                <Cell>
                    {activeQuestion.text}
                </Cell>
                {activeQuestion.answers.map((answer, id) => {
                    return <Answer
                        id={id}
                        answer={answer}
                        key={id}
                        onClick={next}
                    />
                })}
            </Group>

        </Panel>
    )
};

Index.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Index;
