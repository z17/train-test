import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Cell, Div, Group, Panel, Progress} from '@vkontakte/vkui';

import Answer from "../Answer/index";
import {applyQuestionAnswer} from "../../models/Test";
import {EVENT_ANSWER, stats} from "../../models/Stats";
import {questions} from "../../models/TestData";

const Index = ({id, go}) => {

    const [activeQuestionId, setActiveQuestionId] = useState(0);
    const activeQuestion = questions[activeQuestionId];

    const next = (event) => {
        let answerId = event.currentTarget.dataset.answer;

        stats(EVENT_ANSWER, activeQuestionId, answerId);
        applyQuestionAnswer(activeQuestionId, answerId);

        if (activeQuestionId + 1 < questions.length) {
            setActiveQuestionId(activeQuestionId + 1);
        } else {
            go('result');
        }
    };
    let currentState = (activeQuestionId + 1) + '/' + questions.length;

    return (
        <Panel id={id}>
            <Group>
                <Progress value={activeQuestionId * 10}/>
                <Cell>Какой ты вагон? {currentState}</Cell>
                <Cell>
                    {activeQuestion.text}
                </Cell>
                <Div className="Answers">
                    {activeQuestion.answers.map((answer, id) => {
                        return <Answer
                            id={id}
                            answer={answer}
                            key={id}
                            onClick={next}
                        />
                    })}
                </Div>
            </Group>

        </Panel>
    )
};

Index.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Index;
