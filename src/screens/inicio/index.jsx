import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';

const Inicio = ({ navigation }) => {
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
    </View>
  );
};

export default Inicio;
