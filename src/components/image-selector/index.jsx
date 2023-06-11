import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker';
import { useState } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos de tu permiso para usar la cámara', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    console.warn('image', image);
    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {!pickedUrl ? (
          <Text style={styles.txtDesc}>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar foto" color={COLORS.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
