import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../pages/Overview';
import Gallery from '../pages/Gallery';
import Episodes from '../pages/Episodes';
import Cast from '../pages/Cast';


const Content = () => (
	<Switch>
		<Route exact path="/" component={Overview} />
		<Route exact path="/Gallery" component={Gallery} />
		<Route exact path="/Episodes" component={Episodes} />
		<Route exact path="/Cast" component={Cast} />
	</Switch>
);

export default Content;
