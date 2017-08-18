import React from 'react';
import { FormLabel, FormInput, SocialIcon, Button } from 'react-native-elements';

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
      <Container backgroundColor={'#fff'}>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.emailChangeText} />

        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry onChangeText={this.passwordChangeText} />

        <Button
          raised
          title="Sign in"
          onPress={this.submitCredentials}
          onLongPress={this.submitCredentials}
          backgroundColor={'#1de9b6'}
        />

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
