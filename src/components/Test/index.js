import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Cell, Group} from '@vkontakte/vkui';

import Answer from "../Answer/index";
import {applyQuestionAnswer, questions} from "../../models/Test";


const Index = ({id, go}) => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const question = questions[activeQuestion];

    const next = (event) => {
        let answerId =  event.currentTarget.dataset.answer;
        applyQuestionAnswer(activeQuestion, answerId);

        if (activeQuestion + 1 < questions.length) {
            setActiveQuestion(activeQuestion + 1);
        } else {
            go('result');
        }

    };


    return (
        <Panel id={id}>
            <Group>
                <Cell>Какой ты вагон? {activeQuestion + 1}/{questions.length}</Cell>
                <Cell>
                    {question.text}
                </Cell>
                {question.answers.map((answer, id) => {
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
