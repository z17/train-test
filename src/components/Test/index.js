import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Cell, Group} from '@vkontakte/vkui';

import Answer from "../Answer/index";

const questions = [
    {
        id: 1,
        text: 'Что с этим делать?',
        answers: [1, 2, 3, 4]
    },
    {
        id: 2,
        text: 'Что с этим делать?',
        answers: [1, 2, 3, 4]
    },
    {
        id: 3,
        text: 'Что с этим делать?',
        answers: [1, 2, 3, 4]
    },
    {
        id: 4,
        text: 'Что с этим делать?',
        answers: [1, 2, 3, 4]
    }
];


const Index = ({id, go}) => {

    const [activeQuestion, setActiveQuestion] = useState(0);

    const next = (event) => {
        if (activeQuestion + 1 === questions.length) {
            go(event);
        } else {
            setActiveQuestion(activeQuestion + 1);
        }
    };

    const question = questions[activeQuestion];

    return (
        <Panel id={id}>
            <Group>
                <Cell>Какой ты вагон? {activeQuestion + 1}/{questions.length}</Cell>
                <Cell>
                    {question.text}
                </Cell>
                {question.answers.map((answer, id) => {
                    return <Answer
                        key={id}
                        id={id}
                        text={answer}
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
