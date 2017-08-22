import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const CircleDebt = ({ isOwing = true, amount }) => {
  const containerStyles = [styles.circle];

  if (isOwing) {
    containerStyles.push({ backgroundColor: '#66bb6a' });
  } else {
    containerStyles.push({ backgroundColor: '#ff5252' });
  }

  return (
    <View style={containerStyles}>
      <Text style={styles.title}>
        {isOwing ? 'Owing Me:' : 'Owing Others:'}
      </Text>
      <Text style={styles.body}>
        {amount} €
      </Text>
    </View>
  );
};

CircleDebt.propTypes = {
  isOwing: PropTypes.bool,
  amount: PropTypes.number,
};

export default CircleDebt;
