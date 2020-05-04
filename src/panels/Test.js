import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Cell, Group} from '@vkontakte/vkui';

import Button from "@vkontakte/vkui/dist/components/Button/Button";

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


const Test = ({id, go}) => {

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
            <PanelHeader
                left={<PanelHeaderButton onClick={go} data-to="home"><Icon24Back/></PanelHeaderButton>}
            >
                Какой ты вагон? {activeQuestion + 1}/{questions.length}
            </PanelHeader>
            <Group>
                <Cell>
                    {question.text}
                </Cell>
                {question.answers.map((answer, id) => {
                    return <Cell key={id}>
                        <Button onClick={next}
                                data-answer={id}
                                data-to='result'>
                            {id+1}. {answer}
                        </Button>
                    </Cell>
                })}
            </Group>

        </Panel>
    )
};

Test.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Test;
