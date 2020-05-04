import React, {useState} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Test from "./panels/Test";
import Result from "./panels/Result";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' go={go} />
			<Test id='test' go={go} />
			<Result id='result' go={go} />
		</View>
	);
};

export default App;

