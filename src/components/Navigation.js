import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './List/ListItem';
import List from './List/List';



class Navigation extends Component {
	render() {
		return (
			<List >
				<ListItem inline>
					<NavLink to="/">Overview</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/Gallery">Gallery</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/Episodes">Episodes</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/Cast">Cast</NavLink>
				</ListItem>
			</List>
		);
	}
}

export default Navigation;
