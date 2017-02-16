import React, {Component} from 'react';
import GroceryList from './GroceryList';
import {get} from 'axios';

import store from '../store';

export default class extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {

        store.subscribe(() => {
            this.setState({ items: store.getState().items });
        });

        get('/api/list')
          .then(res => res.data) // 1
          .then(list => {
              store.dispatch({ type: 'SET_ITEMS', items: list });
          })
          .catch(console.error);
    }

    render() {
        return (
          <GroceryList items={this.state.items} />
        );
    }

}