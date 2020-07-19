import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Cell, Div, Group, PanelHeader, Separator} from '@vkontakte/vkui';
import {getResult} from "../../models/Test";
import {
    EVENT_POST_SHARE,
    EVENT_POST_SHARE_CLICK,
    EVENT_RETRY,
    EVENT_STORY_SHARE,
    EVENT_STORY_SHARE_CLICK,
    stats
} from "../../models/Stats";
import bridge from '@vkontakte/vk-bridge';
import './Result.css'
import Icon24StoryOutline from '@vkontakte/icons/dist/24/story_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';

const Index = ({id, go}) => {
    const [result] = useState(getResult());

    bridge.subscribe((event) => {
        if (event.detail.type === "VKWebAppShowWallPostBoxResult") {
            stats(EVENT_POST_SHARE);
        }
        if (event.detail.type === "VKWebAppShowStoryBoxResult") {
            stats(EVENT_STORY_SHARE);
        }
    });

    const onRetryClick = () => {
        stats(EVENT_RETRY);
        go('home')
    };

    const onPostShareClick = () => {
        stats(EVENT_POST_SHARE_CLICK);
        let text = result.text + "\nУзнать какой ты вагон: https://vk.com/app7469782";
        bridge.send("VKWebAppShowWallPostBox", {"message": text, "attachments": result.attachment});
    };

    const onStoryShareClick = () => {
        stats(EVENT_STORY_SHARE_CLICK);
        bridge.send("VKWebAppShowStoryBox", {
            "background_type": "image",
            "url": result.image,
            "attachment": {
                "text": "open",
                "type": "url",
                "url": "https://vk.com/app7469782"
            },
            "stickers": [
                {
                    "sticker_type": "native",
                    "sticker": {
                        "action_type": "text",
                        "transform": {
                            "gravity": "center_top",
                            "translation_y": 0.12
                        },
                        "action": {
                            "text": "Какой ты вагон?"
                        }
                    }
                },
                {
                    "sticker_type": "native",
                    "sticker": {
                        "action_type": "text",
                        "transform": {
                            "gravity": "center_bottom",
                            "translation_y": -0.12
                        },
                        "action": {
                            "text": result.title
                        }
                    }
                }
            ]
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
