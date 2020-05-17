import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Group} from '@vkontakte/vkui';
import {getResult} from "../../models/Test";
import {EVENT_RETRY, stats} from "../../models/Stats";
import bridge from '@vkontakte/vk-bridge';
import './Result.css'

const Index = ({id, go}) => {
    const [result] = useState(getResult());

    const onRetryClick = () => {
        stats(EVENT_RETRY);
        go('home')
    };

    const onPostShareClick = () => {
        bridge.send("VKWebAppShowWallPostBox", {"message": result.text, "attachments": result.attachment});
    };

    const onStoryShareClick = () => {

    };

    const onImageClick = () => {
        bridge.send("VKWebAppShowImages", {
            images: [
                result.image
            ]
        });
    };

    return (<Panel id={id}>
            <Group>
                <Cell>Результат: {result.title}</Cell>
                <Cell><img className="Result-Image" src={result.image} onClick={onImageClick}/></Cell>
                <Cell>{result.text}</Cell>
                <Cell>
                    <Button size="xl" level="2" onClick={onRetryClick}>
                        В начало
                    </Button>
                </Cell>
                <Cell>
                    <Button size="xl" level="2" onClick={onPostShareClick}>
                        На стену
                    </Button>
                </Cell>
                <Cell>
                    <Button size="xl" level="2" onClick={onStoryShareClick()}>
                        В истории
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
