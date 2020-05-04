import React, {useState} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './components/Home';
import Test from "./components/Test";
import Result from "./components/Result/";
import "./App.css"

const App = () => {
    const [activePanel, setActivePanel] = useState('home');

    const go = (panel) => {
        setActivePanel(panel);
    };

    return (
        <View activePanel={activePanel}>
            <Home id='home' go={go}/>
            <Test id='test' go={go}/>
            <Result id='result' go={go}/>
        </View>
    );
};

export default App;

