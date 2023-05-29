import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { MedidaItem } from '../../components';
import { selectMedidas } from '../../store/actions';

const Prevencion = ({ navigation }) => {
  const medidas = useSelector((state) => state.medidas.data);
  const dispatch = useDispatch();
  const onSelected = (item) => {
    const titulo = item.title;
    dispatch(selectMedidas(item.id));
    navigation.navigate('Medidas', { name: titulo });
  };
  const renderItem = ({ item }) => <MedidaItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.titMedidas}>MEDIDAS DE PREVENCIÓN</Text>
      <FlatList data={medidas} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Prevencion;
