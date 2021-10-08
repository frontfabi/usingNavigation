import React from 'react';
import { SafeAreaView } from 'react-native';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

const App = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
};

export default App;
