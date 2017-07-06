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
        <View style={styles.middle_circle}>
          <DebtCircle debt_status='owed'/>
          <DebtBalance/>
          <View style={styles.middle_suggestion}>
            <PaymentSuggestion/>
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
  blank: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middle_circle: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle_suggestion: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
