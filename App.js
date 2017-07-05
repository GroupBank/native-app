import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image }
    from 'react-native';

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
        <Image source={circle_color} style={{width: 250, height: 250}}/>
      </View>
    );
  }
}


export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GroupSwitcherButton/>
        <DebtCircle debt_status='owed'/>
        <DebtBalance/>
        <PaymentSuggestion/>
        <PaymentButton/>
        <NotificationButton/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
