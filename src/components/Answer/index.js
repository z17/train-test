import React from 'react';
import {Cell, Button} from '@vkontakte/vkui';

const Answer = ({id, answer, onClick}) => {

    return (
        <Cell>
            <Button onClick={onClick}
                    data-answer={id}>
                {id + 1}. {answer.text}
            </Button>
        </Cell>
    )
};


export default Answer;
