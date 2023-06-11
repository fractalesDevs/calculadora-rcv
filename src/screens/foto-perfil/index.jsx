import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { ImageSelector } from '../../components';

const FotoPerfil = () => {
  return (
    <View style={styles.container}>
      <ImageSelector onImage={() => null} />
    </View>
  );
};

export default FotoPerfil;
