import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';

const FotoPerfil = ({ navigation }) => {
  const [seteo, setSeteo] = useState(false);
  const imageUrl = useSelector((state) => state.image.url);
  const seteoBtn = useSelector((state) => state.image.seteo);

  const saveImage = () => {
    setSeteo(true);
  };

  const onHandlerBack = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto de perfil</Text>
      {seteo ? (
        <View>
          <Image style={styles.img} source={{ uri: imageUrl }} />
          <Button title="Regresar a calculadora" style={styles.btnBack} onPress={onHandlerBack} />
        </View>
      ) : (
        <View>
          <ImageSelector onImage={() => null} />
          <Button
            style={styles.btn}
            title="Guardar foto"
            onPress={saveImage}
            disabled={!seteoBtn}
          />
        </View>
      )}
    </View>
  );
};

export default FotoPerfil;
