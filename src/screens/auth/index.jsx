import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';
import { signIn, signUp } from '../../store/actions';

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Registro';
  const buttonLoged = isLogin ? 'Login' : 'Registrarse';
  const messageLogin = isLogin ? '¿Aún no tienes una cuenta?' : '¿Ya tienes una cuenta?';
  const onHandleChangeLogin = () => {
    setIsLogin(!isLogin);
  };
  const onHandleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.contForm}>
        <Text style={styles.titForm}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@mail.com"
          placeholderTextColor={COLORS.secondary}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry
          placeholderTextColor={COLORS.secondary}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.buttonContainer}>
          <Button title={messageLogin} color={COLORS.primary} onPress={onHandleChangeLogin} />
        </View>
        <View style={styles.submitContainer}>
          <Button title={buttonLoged} color={COLORS.secondary} onPress={onHandleAuth} />
        </View>
      </View>
    </View>
  );
};

export default Auth;
