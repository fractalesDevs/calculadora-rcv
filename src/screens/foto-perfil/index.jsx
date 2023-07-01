import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';
import { fetchData, insertData } from '../../db';
import { dataGuardada, dataObtenida } from '../../store/actions/image.action';

const FotoPerfil = ({ navigation }) => {
  const dispatch = useDispatch();
  const [seteo, setSeteo] = useState(false);
  const imageUrl = useSelector((state) => state.image.url);
  const seteoBtn = useSelector((state) => state.image.seteo);

  const saveImage = async () => {
    setSeteo(true);
    try {
      const result = await insertData(imageUrl);
      dispatch(dataGuardada(result));
    } catch {
      console.log('Error');
    }
  };

  const onHandlerBack = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto de perfil</Text>
      {seteo ? (
        <View>
          <Image style={styles.img} source={{ uri: imageUrl }} />
          <Button title="Regresar a perfil" style={styles.btnBack} onPress={onHandlerBack} />
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
