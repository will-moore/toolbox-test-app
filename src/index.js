import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import theme from './assets/react-toolbox/theme'
import './assets/react-toolbox/theme.css'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
