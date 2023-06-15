import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import Navigation from './navigation';
import { Inicio, FotoPerfil } from './screens/index';
import store from './store/index';

init()
  .then(() => {
    console.log('DB inicializada ');
  })
  .catch((err) => {
    console.log('La inicialización de la DB ha fallado');
    console.log(err);
  });

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
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
