import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createStackNavigator();

export default props => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true, // Esconde / Mostra o header na tela
    }}
    initialRouteName="TelaA">
    <Stack.Screen
      options={{
        title: 'Informações iniciais',
      }}
      name="TelaA"
      component={TelaA}
    />
    <Stack.Screen name="TelaB" component={TelaB} />
    <Stack.Screen name="TelaC" component={TelaC} />
  </Stack.Navigator>
);
