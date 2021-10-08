import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Stack from './Stack';

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
);
