import React, { Component } from 'react';
import data from "../data/en_US.json";
import ListItem from './List/ListItem.js';
import List from './List/List.js';

const Location = data.locations;

class Locations extends Component {
    render() {
        return (
            <List>
                {Location.map(s => (<ListItem style={{ color: "black" }}>{s}</ListItem>))}
            </List>
        );
    }
}
export default Locations;