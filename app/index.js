/*
 * @flow
 */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//  import { Provider } from 'react-redux';

//  import Navigator from './config/routes';
//  import { AlertProvider } from './components/Alert';
//  import store from './config/store';
import Home from './screens/Home';


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => <Home />;

/*
export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);


import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';


export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.top}>
          <GroupSwitcherButton/>
        </View>
        <View style={styles.middle}>
          <View style={styles.circle}>
            <Text style={styles.text_circle_mode}> Owing: </Text>
            <Text style={styles.text_circle_debt}> 3.52 $ </Text>
          </View>
          <View style={styles.suggestion}>
            <Text style={styles.suggestion_text}> Pay Tiago a drink! </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <PaymentButton/>
          <NotificationButton />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middle: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 300/2,
    backgroundColor: '#E53935',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_circle_mode: {
    color: 'white',
    fontSize: 25,
  },
  text_circle_debt: {
    color: 'white',
    fontSize: 60,
  },
  suggestion: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  suggestion_text: {
    fontSize: 25,
    fontStyle: 'italic'
  },
  bottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);*/
