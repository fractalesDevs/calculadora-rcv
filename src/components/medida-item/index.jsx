import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const MedidaItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Text style={styles.txt}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedidaItem;
