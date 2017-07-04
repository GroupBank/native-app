import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image }
    from 'react-native';

class PaymentButton extends React.Component {
  render() {
    return (
      <Button
      onPress={() => { Alert.alert('You tapped the button!')}}
      title="Press Me"
      />
    );
  }
}


class DebtCircle extends React.Component {
  render() {
    var pic = {};
    if(this.props.debt_status == 'owed'){
       pic['uri'] = 'http://content.etilize.com/original/1023547217.jpg'
    }
    else if(this.props.debt_status == 'owing'){
      pic['uri'] = 'http://www.iconsdb.com/icons/download/red/circle-256.gif'
    }
    return (
      <Image source={pic} style={{width: 250, height: 250}}/>
    );
  }
}

export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PaymentButton/>
        <DebtCircle debt_status='owed'/>
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
