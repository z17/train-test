import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Group, Cell, Button} from '@vkontakte/vkui';

const Home = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Какой ты вагон?</PanelHeader>

        <Group>
            <Cell>Тут текст описание и картинка поезда</Cell>
            <Cell>
                <Button size="xl" level="2" data-to="test" onClick={go}>
                    Начать тест
                </Button>

            </Cell>
        </Group>
    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Home;
