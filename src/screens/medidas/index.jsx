import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Medidas = () => {
  const medida = useSelector((state) => state.medidas.selected);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{medida.title}</Text>
    </SafeAreaView>
  );
};

export default Medidas;
