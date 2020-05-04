import React from 'react';
import {Cell, Button} from '@vkontakte/vkui';

const Answer = ({id, text, onClick}) => {

    return (
        <Cell>
            <Button onClick={onClick}
                    data-answer={id}
                    data-to='result'>
                {id + 1}. {text}
            </Button>
        </Cell>
    )
};


export default Answer;
