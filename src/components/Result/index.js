import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Group} from '@vkontakte/vkui';
import {getResultText} from "../../models/Test";

const Index = ({id, go}) => {
    const result = getResultText();

    return (<Panel id={id}>
            <Group>
                <Cell>Результат</Cell>
                <Cell>{result}</Cell>
                <Cell>
                    <Button size="xl" level="2" onClick={() => {
                        go('home')
                    }}>
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
