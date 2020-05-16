import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Group, Cell, Button} from '@vkontakte/vkui';
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
            <Cell>Тут текст описание и картинка поезда</Cell>
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
