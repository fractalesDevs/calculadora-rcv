import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Medidas = ({ navigation }) => {
  const medida = useSelector((state) => state.medidas.selected);
  const returnMedida = () => {
    const titulo = medida.title;
    navigation.navigate('Prevencion', { name: titulo });
  };
  return (
    <ScrollView style={styles.scrollCont} contentContainerStyle={styles.scrollCont2}>
      <View style={styles.contImage}>
        <Image resizeMode="contain" source={{ uri: medida.img }} style={styles.imgSize} />
      </View>
      <View style={styles.contTxt}>
        <Text style={styles.title}>{medida.subtitle}</Text>
        <Text style={styles.txt}>{medida.txt}</Text>
      </View>
      <TouchableOpacity onPress={returnMedida} style={styles.btn}>
        <Text style={styles.txtBtn}>REGRESAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Medidas;
