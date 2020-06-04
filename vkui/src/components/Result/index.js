import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Div, Group, PanelHeader, Separator} from '@vkontakte/vkui';
import {getResult} from "../../models/Test";
import {EVENT_RETRY, stats} from "../../models/Stats";
import bridge from '@vkontakte/vk-bridge';
import './Result.css'
import Icon24StoryOutline from '@vkontakte/icons/dist/24/story_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';

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
                <Button className="Result-Share" before={<Icon24ShareOutline/>} onClick={onPostShareClick}>
                    На стену
                </Button>
                <Button className="Result-Share" before={<Icon24StoryOutline/>} onClick={onStoryShareClick}>
                    В истории
                </Button>
            </Cell>
            <Separator/>
            <Cell>
                <Button size="xl" mode="outline" onClick={onRetryClick}>
                    Перейти в начало
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
