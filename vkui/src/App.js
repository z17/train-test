import React, {useState, useEffect} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './components/Home';
import Test from "./components/Test";
import Result from "./components/Result/";
import "./App.css"
import {EVENT_INIT, stats} from "./models/Stats";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [init, setInit] = useState(false);

    const go = (panel) => {
        setActivePanel(panel);
    };

    useEffect(() => {
        if (init === false) {
            stats(EVENT_INIT);
            setInit(true);
        }
    });

    return (
        <View activePanel={activePanel}>
            <Home id='home' go={go}/>
            <Test id='test' go={go}/>
            <Result id='result' go={go}/>
        </View>
    );
};

export default App;
