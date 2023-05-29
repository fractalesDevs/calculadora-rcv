import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const MedidaSingular = ({ item }) => {
  console.warn(item);
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default MedidaSingular;
