/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import BaseComponent from './BaseComponent';
import ExpressSearch from './ExpressSearch';

export default class ReactNativeDemo extends Component {
    render() {
        return (
            <ExpressSearch/>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
