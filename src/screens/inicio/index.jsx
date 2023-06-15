import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';

const Inicio = ({ navigation }) => {
  const [fotoObtenida, setFotoObtenida] = useState(null);
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
