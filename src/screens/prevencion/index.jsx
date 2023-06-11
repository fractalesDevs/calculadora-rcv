import React from 'react';
import { FlatList, View, Text, ScrollView, Image } from 'react-native';
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
    <ScrollView style={styles.scrollCont}>
      <View style={styles.container}>
        <Image style={styles.logoMed} source={require('../../../assets/img/logo-medidas.png')} />
        <Text style={styles.titMedidas}>
          Recuérdele a su paciente que hay muchas cosas que puede hacer para disminuir su riesgo
          cardio vascular o riesgo de sufrir alguna enfermedad del corazón.
        </Text>
      </View>
      <View style={styles.container2}>
        <FlatList data={medidas} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    </ScrollView>
  );
};

export default Prevencion;
