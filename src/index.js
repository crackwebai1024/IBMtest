import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import './i18next';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
	<Suspense fallback={<div>Loading</div>}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Suspense>,
	document.getElementById('root')
);
registerServiceWorker();
