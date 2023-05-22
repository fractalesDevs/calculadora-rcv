import { useFonts } from 'expo-font';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';

import Navigation from './navigation';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}
