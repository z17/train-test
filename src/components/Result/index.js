import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Group} from '@vkontakte/vkui';


const Index = props => (
    <Panel id={props.id}>
        <Group>
            <Cell>Результат</Cell>
            <Cell>Ты - тупой вагон</Cell>
            <Cell>
                <Button size="xl" level="2" data-to="home" onClick={props.go}>
                    В начало
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
