import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { Container } from '../components/Container';
import { CircleDebt } from '../components/CircleView';

class Home extends Component {
  static propTypes = {
    suggestionPayment: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  switchGroup = () => {
    console.log('Switch group screen!');
  };

  newTransaction = () => {
    console.log('Make new Transaction screen!');
  };

  checkNotifications = () => {
    console.log('Checking notifications screen!');
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <Button
          raised
          onPress={this.switchGroup}
          title="Switch Group"
          icon={{ name: 'arrow-up', type: 'evilicon' }}
          backgroundColor={'#ff5252'}
        />

        <CircleDebt isOwing={false} amount={4.24} />

        <Text> Pay a drink to Tiago Ricardo! </Text>

        <Button
          raised
          onPress={this.newTransaction}
          title="Transaction"
          icon={{ name: 'plus', type: 'evilicon' }}
          backgroundColor={'#ff5252'}
        />

        <Button
          raised
          onPress={this.checkNotifications}
          title=""
          icon={{ name: 'comment', type: 'evilicon', color: '#ff5252' }}
          backgroundColor={'#fff'}
        />

      </Container>
    );
  }
}

export default Home;

/*
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  handleChangeText = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = '...';
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            date={this.props.lastConvertedDate}
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
*/