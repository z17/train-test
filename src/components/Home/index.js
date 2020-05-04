import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Group, Cell, Button} from '@vkontakte/vkui';
import './Home.css'

const Index = ({id, go}) => (
    <Panel className="Home" id={id}>
        <Group>
            <Cell className="Home-title">Кактой ты вагон?</Cell>
            <Cell>Тут текст описание и картинка поезда</Cell>
            <Cell>
                <Button size="xl" level="2" data-to="test" onClick={go}>
                    Начать тест
                </Button>

            </Cell>
        </Group>
    </Panel>
);

Index.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Index;
