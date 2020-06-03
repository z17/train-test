import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Div, Group, PanelHeader} from '@vkontakte/vkui';
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
        let text = result.text + "\nУзнать какой вы вагон: https://vk.com/app7469782";
        bridge.send("VKWebAppShowWallPostBox", {"message": text, "attachments": result.attachment});
    };

    const onStoryShareClick = () => {
        bridge.send("VKWebAppShowStoryBox", {
            "background_type": "image",
            "url": result.image,
            "attachment": {
                "text": "open",
                "type": "url",
                "url": "https://vk.com/app7469782"
            }
        });
    };

    const onImageClick = () => {
        bridge.send("VKWebAppShowImages", {
            images: [
                result.image
            ]
        });
    };

    return <Panel id={id}>
        <PanelHeader>Результат</PanelHeader>
        <Group>
            <Cell className="Result-Title">{result.title}</Cell>
            <Cell><img className="Result-Image" src={result.image} onClick={onImageClick}/></Cell>
            <Div>{result.text}</Div>
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
                <Button size="xl" level="2" onClick={onStoryShareClick}>
                    В истории
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
