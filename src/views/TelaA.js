import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  console.warn(props.navigation.navigate != null);
  props.navigation.navigate('TelaB');
  return <TextoCentral corFundo="#e53935">Tela A</TextoCentral>;
};
