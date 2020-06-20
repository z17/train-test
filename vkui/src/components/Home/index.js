import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Group, Cell, Div, Button, PanelHeader} from '@vkontakte/vkui';
import './Home.css'
import {EVENT_START, stats} from "../../models/Stats";
import mainImage from '../../img/main.jpg'


const Index = ({id, go}) => {

    const onStartClick = () => {
        stats(EVENT_START);
        go('test')
    };

    return <Panel className="Home" id={id}>
        <PanelHeader>Какой ты вагон?</PanelHeader>
        <Group>
            <Div>
                <img className="Home-Image" src={mainImage} />
            </Div>
            <Div className="Home-Text">
                Железные дороги стали неотъемлемой частью человеческой цивилизации, а многие из нас даже ассоциируют
                себя с поездами или вагонами. Наш психологический тест, составленный в партнёрстве с ведущими
                психологами России, поможет тебе разобраться в себе и даст ответ на важный вопрос — какой ты вагон в
                глубине своей души.
            </Div>
            <Cell>
                <Button size="xl" level="2" onClick={onStartClick}>
                    Начать тест
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
