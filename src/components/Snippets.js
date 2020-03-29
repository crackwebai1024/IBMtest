import React, { Component } from 'react';
import data from "../data/en_US.json";
import ListItem from './List/ListItem.js';
import List from './List/List.js';

const social = data.snippets;

class Snippets extends Component {
    render() {
        return (
            <List>
                {social.map(s => (<ListItem style={{ marginLeft: '5%' }}> <br />{s}</ListItem>))}
            </List>
        );
    }
}



export default Snippets;