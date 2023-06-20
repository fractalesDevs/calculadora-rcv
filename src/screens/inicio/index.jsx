import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { fetchData } from '../../db';
import { dataObtenida } from '../../store/actions/image.action';

const Inicio = ({ navigation }) => {
  const [fotoObtenida, setFotoObtenida] = useState(null);
  const dispatch = useDispatch();

  const urlFotoPerfil = async () => {
    try {
      const result = await fetchData();
      const arrayResult = result.rows._array;
      dispatch(dataObtenida(arrayResult));
      const lastItem = arrayResult[arrayResult.length - 1];
      const linkItem = lastItem.link;
      setFotoObtenida(linkItem);
    } catch {
      console.log('Error');
    }
  };

  useFocusEffect(
    useCallback(() => {
      urlFotoPerfil();
    }, [urlFotoPerfil])
  );

  const fotoPerfilHandler = () => {
    navigation.navigate('FotoPerfil');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contFotoPer}>
        {!fotoObtenida ? (
          <Text>No hay foto de perfil</Text>
        ) : (
          <Image style={styles.foto} source={{ uri: fotoObtenida }} />
        )}
      </View>

      <TouchableOpacity onPress={fotoPerfilHandler} style={styles.btnPerfil}>
        <Text style={styles.txtBtnPer}>Establecer foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;
