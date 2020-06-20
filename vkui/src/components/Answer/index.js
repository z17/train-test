import React from 'react';
import {Div} from '@vkontakte/vkui';
import './Answer.css'

const Answer = ({id, answer, onClick}) => {

    return (
        <Div className="Answer" onClick={onClick} data-answer={id}>
            {id + 1}. {answer.text}
        </Div>
    )
};


export default Answer;
