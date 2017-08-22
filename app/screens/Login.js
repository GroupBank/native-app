import React from 'react';
import { FormLabel, FormInput, SocialIcon, Button, Divider } from 'react-native-elements';
import { View } from 'react-native';

import { Container } from '../components/Container';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  loginWithFacebook = () => {
    console.log('Trying to login with facebook!');
  };

  loginWithTwitter = () => {
    console.log('Trying to login with twitter!');
  };

  emailChangeText = (text) => {
    this.state.email = text;
  };

  passwordChangeText = (text) => {
    this.state.password = text;
  };

  submitCredentials = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Container >
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.emailChangeText} />

        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          onSubmitEditing={this.submitCredentials}
          onChangeText={this.passwordChangeText}
        />

        <Divider style={{ height: 20, backgroundColor: '#fff' }} />

        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
          <Button
            raised
            title="Sign in"
            onPress={this.submitCredentials}
            onLongPress={this.submitCredentials}
            backgroundColor={'#1de9b6'}
          />
          <Button
            flex="1"
            raised
            title="Register"
            onPress={this.submitCredentials}
            onLongPress={this.submitCredentials}
            backgroundColor={'#1de9b6'}
          />
        </View>

        <Divider style={{ height: 20, backgroundColor: '#fff' }} />

        <SocialIcon
          title="Sign In With Twitter"
          button
          onPress={this.loginWithTwitter}
          onLongPress={this.loginWithTwitter}
          type="twitter"
        />
        <SocialIcon
          title="Sign In With Facebook"
          button
          onPress={this.loginWithFacebook}
          onLongPress={this.loginWithFacebook}
          type="facebook"
        />
      </Container>
    );
  }
}

export default Login;
