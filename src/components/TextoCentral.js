import React from 'react';
import { Text, View } from 'react-native';

const TextoCentral = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || '#212121',
      }}>
      <Text style={{fontSize: 50, color: props.corTexto || '#fafafa'}}>
        {props.children}
      </Text>
    </View>
  );
};

export default TextoCentral;
