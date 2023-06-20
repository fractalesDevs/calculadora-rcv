import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import Navigation from './navigation';
import store from './store/index';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database fail connect');
    console.log(err.message);
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
