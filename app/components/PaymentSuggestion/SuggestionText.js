import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

const randomTip = ({ person, amount }) => {
  const tips = {
    cheapest: [`Pay ${person} a beer!`, `Give ${person} a Donut!`],
    cheap: [`Pay ${person} a lunch!`, `Pay ${person} the dinner!`],
    normal: [`Give ${person} a game on steam!`, `Give ${person} a pooper!`],
    expensive: [`Don't be ashamed, it is time to offer a BMW to ${person}!`],
  };
  switch (amount) {
    case amount < 5:
      return tips.cheapest[Math.floor(Math.random() * tips.cheapest.length)];

    case amount < 10:
      return tips.cheap[Math.floor(Math.random() * tips.cheap.length)];

    case amount < 20:
      return tips.normal[Math.floor(Math.random() * tips.normal.length)];

    case amount >= 20:
      return tips.expensive[Math.floor(Math.random() * tips.expensive.length)];

    default:
      return null;
  }
};

const SuggestionText = ({ person, amount }) => (
  <Text style={styles.smallText}>
    {randomTip}
  </Text>
);

SuggestionText.propTypes = {
  person: PropTypes.string,
  amount: PropTypes.number,
};

export default SuggestionText;
