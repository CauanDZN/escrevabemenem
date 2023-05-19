import React, { useContext, useState } from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import { AuthContext } from '../auth/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const userData = {
      username: username,
      password: password,
    };

    try {
      await login(userData);
      // Navegar para a tela de HomeScreen após o login
      // (verifique se a rota está configurada corretamente)
    } catch (error) {
      console.log(error);
      // Lidar com erros durante o login
    }
  };

  return (
    <View>
      {/* Campos de entrada do login */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} disabled={loading} />
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default LoginScreen;