import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Button, Cell, Group} from '@vkontakte/vkui';


const Result = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home"> <Icon24Back/>
            </PanelHeaderButton>}
        >
            Результат
        </PanelHeader>
        <Group>
            <Cell>Ты - тупой вагон</Cell>
            <Cell>
                <Button size="xl" level="2" data-to="home" onClick={props.go}>
                    В начало
                </Button>
            </Cell>
        </Group>
    </Panel>
);

Result.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Result;
