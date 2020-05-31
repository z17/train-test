import React from 'react';
import {Cell} from '@vkontakte/vkui';
import './Answer.css'

const Answer = ({id, answer, onClick}) => {

    return (
        <Cell className="Answer" onClick={onClick} data-answer={id}>
            {id + 1}. {answer.text}
        </Cell>
    )
};


export default Answer;
