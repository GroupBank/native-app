import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

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

export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PaymentButton/>
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
