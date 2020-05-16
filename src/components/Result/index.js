import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Group} from '@vkontakte/vkui';
import {getResultText} from "../../models/Test";
import {EVENT_RETRY, stats} from "../../models/Stats";

const Index = ({id, go}) => {
    const [resultText] = useState(getResultText());

    const onRetryClick = () => {
        stats(EVENT_RETRY);
        go('home')
    };

    return (<Panel id={id}>
            <Group>
                <Cell>Результат</Cell>
                <Cell>{resultText}</Cell>
                <Cell>
                    <Button size="xl" level="2" onClick={onRetryClick}>
                        В начало
                    </Button>
                </Cell>
            </Group>
        </Panel>
    )
};

Index.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Index;
