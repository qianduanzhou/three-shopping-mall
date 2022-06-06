import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

function render(props: any) {
	const { container } = props;
	const rootDom = document.getElementById('root');
	const root = createRoot(container ? container.querySelector('#root') : rootDom);
	root.render(
		<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/reactApp' : '/'}>
			<Provider store={configureStore}>
				<App />
			</Provider>
		</BrowserRouter>
	);

	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({});
}

export async function bootstrap() {
	console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
	console.log('[react16] props from main framework', props);
	render(props);
}

export async function unmount(props: any) {
	const { container } = props;
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
