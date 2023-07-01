import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { styles } from './styles';
import { fetchData } from '../../db';

const Inicio = ({ navigation }) => {
  const editarPerfil = () => {
    navigation.navigate('Perfil');
  };
  const [fotoHome, setFotoHome] = useState(null);

  const fotoHomeUrl = async () => {
    try {
      const result = await fetchData();
      const arrayResult = result.rows._array;
      const lastItem = arrayResult[arrayResult.length - 1];
      const linkItem = lastItem.link;
      setFotoHome(linkItem);
    } catch {
      console.log('Error');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fotoHomeUrl();
    }, [fotoHomeUrl])
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={editarPerfil} style={styles.btnPerfil}>
        <Text style={styles.txtBtnPer}>Consultar Perfil Médico</Text>
        <View style={styles.fotoHome}>
          <Image style={styles.fotoHomeMin} source={{ uri: fotoHome }} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.logoInicio} source={require('../../../assets/img/logoInicio.png')} />
        <View style={styles.contBlanco}>
          <Text style={styles.titInicio}>Cálculo y disminución del RCV </Text>
          <Text style={styles.txtInicio}>
            De acuerdo con la Organización Mundial de la Salud, las enfermedades cardiovasculares
            causan el fallecimiento de más de 17 millones de personas en el mundo cada año. El
            riesgo que un determinado individuo tiene de padecer un episodio de enfermedad coronaria
            u otra enfermedad de origen ateromatoso en los años siguientes puede valorarse
            atendiendo a los principales factores de riesgo cardiovascular y la forma en que éstos
            interactúan. Utilice la siguiente herramienta para calcular el riesgo de su paciente.*
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Inicio;
