import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './screens/Home';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Home />
            </View>
        );
    }
}
