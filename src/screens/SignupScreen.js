import React, { useContext, useState } from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import { AuthContext } from '../auth/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { signup, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const userData = {
      username: username,
      password: password,
    };

    try {
      await signup(userData);
      // Navegar para a tela de login após o signup
      // (opcional, dependendo do fluxo da sua aplicação)
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={handleSignup} disabled={loading} />
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default SignupScreen;