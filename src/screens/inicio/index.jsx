import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';
import { selectData } from '../../db';

const Inicio = ({ navigation }) => {
  const fotoObtenida = async () => {
    try {
      const result = await selectData();
      return result?.rows?._array;
    } catch (error) {
      console.warn(error);
    }
  };

  const fotoPerfilHandler = () => {
    navigation.navigate('FotoPerfil');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Establecer foto de perfil"
        color={COLORS.secondary}
        onPress={fotoPerfilHandler}
      />
      <View>
        {!fotoObtenida ? (
          <Text>No hay foto de perfil</Text>
        ) : (
          <Image style={styles.foto} source={{ uri: fotoObtenida }} />
        )}
      </View>
    </View>
  );
};

export default Inicio;
