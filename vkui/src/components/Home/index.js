import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Group, Cell, Div, Button} from '@vkontakte/vkui';
import './Home.css'
import {EVENT_START, stats} from "../../models/Stats";


const Index = ({id, go}) => {

    const onStartClick = () => {
        stats(EVENT_START);
        go('test')
    };

    return <Panel className="Home" id={id}>
        <Group>
            <Cell className="Home-title">Кактой ты вагон?</Cell>
            <Div>
                Железные дороги стали неотъемлемой частью человеческой цивилизации, а многие из нас даже ассоциируют себя с поездами или вагонами. Наш психологический тест, составленный с партнёрстве с ведущими психологами России, поможет Вам разобраться в себе и даст ответ на важный вопрос - какой вы вагон в глубине своей души.
            </Div>
            <Cell>
                <Button size="xl" level="2" onClick={onStartClick}>
                    Начать тест
                </Button>

            </Cell>
        </Group>
    </Panel>
};

Index.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Index;
