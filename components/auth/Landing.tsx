import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<
    {Register: undefined; Login: undefined; Landing: undefined},
    'Landing'
  >;
};

export default function LandingScreen({navigation}: Props) {
  return (
    <View style={styles.root}>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />

      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({root: {flex: 1, justifyContent: 'center'}});
