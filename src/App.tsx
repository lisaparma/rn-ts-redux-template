import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStore, Store} from 'redux';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";

import {reducer} from "./redux/reducer";
import {IAuthentication} from "./redux/action";

export const store: Store<IStore> = createStore(reducer);

interface AppState {
  auth: boolean;
}

export default class App extends Component<AppState> {

constructor(props: IAppState) {
    super(props);
    this.state = {
      auth:false
    }
  }

  public render() {
    return (
      <View style={styles.container}>
      <Text> Template </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
