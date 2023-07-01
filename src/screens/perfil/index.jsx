import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Input, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';
import { fetchData } from '../../db';
import { dataGuardada, dataObtenida, establecerNombre } from '../../store/actions/image.action';

const Perfil = ({ navigation }) => {
  const [fotoObtenida, setFotoObtenida] = useState(null);
  const [nombreDoc, setNombreDoc] = useState('');
  const [nombAct, setNomAct] = useState(false);
  const nombreSeteado = useSelector((state) => state.image.nombre);
  const mostrarNombre = useSelector((state) => state.image.grabado);
  const dispatch = useDispatch();

  const urlFotoPerfil = async () => {
    try {
      const result = await fetchData();
      const arrayResult = result.rows._array;
      const lastItem = arrayResult[arrayResult.length - 1];
      const linkItem = lastItem.link;
      setFotoObtenida(linkItem);
      dispatch(dataObtenida(fotoObtenida));
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

  const onHandlerNomb = () => {
    setNomAct(!nombAct);
    dispatch(establecerNombre(nombreDoc, nombAct));
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

      <View>
        {mostrarNombre ? (
          <Text style={styles.nombre}>{nombreSeteado}</Text>
        ) : (
          <TextInput
            buttonTitle="Agregar"
            onChangeText={(text) => setNombreDoc(text)}
            onHandlerButton={() => {}}
            placeholder="Dr. Jhon Doe"
            value={nombreDoc}
            style={styles.nombre}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={onHandlerNomb}
        style={mostrarNombre ? styles.btnPerfil2 : styles.btnPerfil3}>
        <Text style={styles.txtBtnPer}>{mostrarNombre ? 'Editar Nombre' : 'Guardar Nombre'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fotoPerfilHandler} style={styles.btnPerfil}>
        <Text style={styles.txtBtnPer}>Establecer foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Perfil;
