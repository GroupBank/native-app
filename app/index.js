/*
 * @flow
 */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//  import { Provider } from 'react-redux';

//  import Navigator from './config/routes';
//  import { AlertProvider } from './components/Alert';
//  import store from './config/store';
import Login from './screens/Login';


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

export default () => <Login />;

/*
export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);


import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';


class PaymentButton extends React.Component {
  render() {
    return (
      <Button
      onPress={() => { Alert.alert('Add a new transaction!')}}
      title="Add Transaction"
      />
    );
  }
}


class NotificationButton extends React.Component {
  render() {
    return (
      <Button
      onPress={() => { Alert.alert('You have a new transaction confirmation!')}}
      title="..."
      />
    );
  }
}


class PaymentSuggestion extends React.Component {
  render() {
    return (
      <Text>Pay Tiago a drink!</Text>
    );
  }
}


class GroupSwitcherButton extends React.Component {
  render() {
    return (
      <Button
      onPress={() => { Alert.alert('Choose another group!')}}
      title="Switch Group"
      />
    );
  }
}


class DebtBalance extends React.Component {
  render() {
    return (
      <Text>3.52$</Text>
    );
  }
}


class DebtCircle extends React.Component {
  render() {
    var circle_color = {};
    var title = '';
    if(this.props.debt_status == 'owed'){
       circle_color['uri'] = 'http://content.etilize.com/original/1023547217.jpg';
       title = 'Owing me:';
    }
    else if(this.props.debt_status == 'owing'){
      circle_color['uri'] = 'http://www.iconsdb.com/icons/download/red/circle-256.gif';
      title = 'Owing others:';
    }
    return (
      <View>
        <Text>{title}</Text>
        <Image source={circle_color} style={{width: 300, height: 300}}/>
      </View>
    );
  }
}


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
